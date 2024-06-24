require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const supabase = require("@supabase/supabase-js");
const { createPdf } = require("./pdf");
const { sendEmail } = require("./email");
const { DateTime } = require("luxon");

app.use(morgan("dev"));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.post("/create-pdf", async (req, res) => {
  const data = {
    aerType: '',
    docType: '',
    contracts: {
      value: 0,
      number: '',
      advancePercentage: 0,
      startDate: new Date(),
      endDate: new Date(),
      retentionValue: 0,
      retentionType: '',
      subscriptionDate: {
        day: '',
        month: '',
        year: '',
        fullDate: new Date()
      },
      object: '',
      paymentMode: '',
      penalty: 0,
      term: 0,
      retentionDeadline: 0,
      nature: ''
    },
    institution: {
      nombre: '',
      city: '',
      legalRepresentative: {
        firstname: '',
        lastname: '',
        jobPosition: ''
      }
    },
    adminContract: {
      firstname: '',
      lastname: '',
      jobPosition: ''
    },
    tecnicoNoInterviniente: {
      firstname: '',
      lastname: ''
    },
    comisionRecepcion: [
      {
        firstname: '',
        lastname: ''
      }
    ],
    contractorsShareholders: {
      name: '',
      legalRepresentative: '',
      legalRepresentativePosition: '',
      governmentId: ''
    },
    departments: {
      nombre: ''
    },
    delivery: [
      {
        deliveryNumber: '',
        deliveryDetail: '',
        deliveryPlannedDate: new Date(),
        deliveryRealDate: {
          day: '',
          month: '',
          year: '',
          fullDate: new Date()
        },
        deliverables: [
          {
            detail: ''
          }
        ],
        payment: {
          billNumber: '',
          paymentRealValue: 0,
          paymentPlannedValue: 0,
          paymentRealDate: new Date(),
          retentionValue: 0,
          penalties: [
            {
              value: 0
            }
          ],
          totalPaymentPenaltiesValue: 0,
        },
        delayValue: 0
      }
    ],
    totalDeliveryDelay: 0,
    totalPenaltiesValue: 0,
    totalPaymentRealValue: 0,
    totalPaymentPlannedValue: 0,
    totalPaymentRetentionValue: 0,
    totalPendingPayment: 0,
    warrantyReturnDate: new Date(),
    valuePayContractor: 0,
    warrantyReturnContractor: 0
  };
  const params = req.body;
  const supabaseResult = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
  const { data: contract, error: contractError } = await supabaseResult.from("contracts").select().eq('id', params.contractId).single();
  const { data: department, error: depError } = await supabaseResult.from("departments").select().eq('id', contract.department_id).single();
  const { data: contractor, error: contractorError } = await supabaseResult.from("contracts_contractors_shareholders").select().eq('id', contract.contractor_id).single();
  const { data: administrator, error: administratorError } = await supabaseResult.from("users").select().eq('id', contract.administrator_id).single();
  const { data: technical, error: technicalError } = await supabaseResult.from("users").select().eq('id', params.technicalId).single();
  const { data: user, error: userError } = await supabaseResult.from("users").select().eq('id', params.userId).single();
  const { data: commisionUsers, error: commisionUsersError } = await supabaseResult.from("users").select().in('id', params.commisionUsersIds);
  const { data: institution, error: institutionError } = await supabaseResult.from("institution").select().eq('id', user.institution_id).single();
  const { data: aer, error: aerError } = await supabaseResult.from("contracts_aer").select().eq('id', params.aerId).eq('contract_id', params.contractId).single();
  const { data: delivery, error: deliveryError } = await supabaseResult.from("contracts_deliveries").select().in('id', params.deliveryList);
  const { data: legalRepInst, error:legalRepInstError } = await supabaseResult.from("users").select().eq('id', institution.legal_representative).single();
  const deliveryDataArray = [];
  const deliverablesDataArray = [];
  const penaltiesDataArray = [];
  const commisionUsersDataArray = [];
  let totalDeliveryDelay = 0;
  let totalPenaltiesValue = 0;
  let totalPaymentPlannedValue = 0;
  let totalPaymentRealValue = 0;
  let totalPaymentRetentionValue = 0;
  for (let i = 0; i < commisionUsers.length; i++) {
    const commisionUserElement = commisionUsers[i];
    commisionUsersDataArray.push({
      firstname: commisionUserElement.firstname,
      lastname: commisionUserElement.lastname
    });
  }
  for (let i = 0; i < delivery.length; i++) {
    const deliveryElement = delivery[i];
    const { data: deliverables, error: deliverablesError } = await supabaseResult.from("contracts_deliverables").select().eq('delivery_id', deliveryElement.id);
    const { data: payment, error: paymentsError } = await supabaseResult.from("contracts_payments").select().eq('delivery_id', deliveryElement.id).single();
    const { data: penalties, error: penaltiesError } = await supabaseResult.from("contracts_payments_penalties").select().eq('payment_id', payment.id);
    let totalPaymentPenaltiesValue = 0;
    for (let j = 0; j < penalties.length; j++) {
      const penaltyElement = penalties[j];
      penaltiesDataArray.push({
        value: penaltyElement.penalty_value
      })
      totalPaymentPenaltiesValue = totalPaymentPenaltiesValue + penaltyElement.penalty_value;
    }
    for (let j = 0; j < deliverables.length; j++) {
      const deliverableElement = deliverables[j];
      deliverablesDataArray.push({
        detail: deliverableElement.detail
      });
    }
    let delayValue = DateTime.fromISO(deliveryElement.delivery_real_date).diff(DateTime.fromISO(deliveryElement.delivery_planned_date), 'days').days;

    if (delayValue <= 0) {
      delayValue = 0
    }

    deliveryDataArray.push({
      deliveryNumber: deliveryElement.delivery_number,
      deliveryDetail: deliveryElement.delivery_detail,
      deliveryPlannedDate: DateTime.fromISO(deliveryElement.delivery_planned_date).toFormat('dd-LL-yyyy'),
      deliveryRealDate: {
        day: DateTime.fromISO(deliveryElement.delivery_real_date).toFormat('dd'),
        month: DateTime.fromISO(deliveryElement.delivery_real_date).toFormat('LLLL', { locale: 'es' }),
        year: DateTime.fromISO(deliveryElement.delivery_real_date).toFormat('yyyy'),
        fullDate: DateTime.fromISO(deliveryElement.delivery_real_date).toFormat('dd-LL-yyyy'),
      },
      deliverables: deliverablesDataArray,
      payment: {
        billNumber: payment.bill_number,
        paymentRealValue: payment.payment_real_value,
        paymentPlannedValue: payment.payment_planned_value,
        paymentRealDate: DateTime.fromISO(payment.payment_real_date).toFormat('dd-LL-yyyy'),
        penalties: penaltiesDataArray,
        retentionValue: payment.retention_value,
        totalPaymentPenaltiesValue: totalPaymentPenaltiesValue
      },
      delayValue: delayValue
    })
    totalPaymentPlannedValue = totalPaymentPlannedValue + payment.payment_planned_value;
    totalPaymentRealValue = totalPaymentRealValue + payment.payment_real_value;
    totalPaymentRetentionValue = totalPaymentRetentionValue + payment.retention_value;
    totalPenaltiesValue = totalPenaltiesValue + totalPaymentPenaltiesValue;
    totalDeliveryDelay = totalDeliveryDelay + delayValue;
  }
  data.aerType = params.aerType;
  data.docType = params.docType;
  data.contracts.advancePercentage = contract.advance_percentage;
  data.contracts.endDate = DateTime.fromISO(contract.contract_end_date).toFormat('dd-LL-yyyy');
  data.contracts.nature = contract.contract_nature;
  data.contracts.number = contract.contract_number;
  data.contracts.object = contract.contract_object;
  data.contracts.paymentMode = contract.payment_mode;
  data.contracts.penalty = contract.penalty;
  data.contracts.retentionDeadline = contract.retention_deadline;
  data.contracts.retentionType = contract.retention_type;
  data.contracts.retentionValue = contract.retention_value;
  data.contracts.startDate = DateTime.fromISO(contract.contract_start_date).toFormat('dd-LL-yyyy');
  data.contracts.subscriptionDate.fullDate = DateTime.fromISO(contract.contract_subscription_date).toFormat('dd-LL-yyyy');
  data.contracts.subscriptionDate.day = DateTime.fromISO(contract.contract_subscription_date).toFormat('dd');
  data.contracts.subscriptionDate.month = DateTime.fromISO(contract.contract_subscription_date).toFormat('LLLL', {locale: 'es'});
  data.contracts.subscriptionDate.year = DateTime.fromISO(contract.contract_subscription_date).toFormat('yyyy');
  data.contracts.term = contract.term;
  data.contracts.value = contract.contract_value;
  data.departments.nombre = department.nombre;
  data.contractorsShareholders.governmentId = contractor.government_id;
  data.contractorsShareholders.legalRepresentative = contractor.legal_representative.toUpperCase();
  data.contractorsShareholders.legalRepresentativePosition = contractor.legal_representative_position;
  data.contractorsShareholders.name = contractor.name;
  data.adminContract.firstname = administrator.firstname.toUpperCase();
  data.adminContract.lastname = administrator.lastname.toUpperCase();
  data.adminContract.jobPosition = administrator.job_position;
  data.tecnicoNoInterviniente.firstname = technical.firstname.toUpperCase();
  data.tecnicoNoInterviniente.lastname = technical.lastname.toUpperCase();
  data.institution.city = institution.city;
  data.institution.nombre = institution.nombre;
  data.delivery = deliveryDataArray;
  data.comisionRecepcion = commisionUsersDataArray;
  data.institution.legalRepresentative.firstname = legalRepInst? legalRepInst.firstname.toUpperCase() : "";
  data.institution.legalRepresentative.lastname = legalRepInst? legalRepInst.lastname.toUpperCase() : "";
  data.institution.legalRepresentative.jobPosition = legalRepInst? legalRepInst.job_position: "";
  data.totalDeliveryDelay = totalDeliveryDelay;
  data.totalPenaltiesValue = totalPenaltiesValue;
  data.warrantyReturnDate = DateTime.fromISO(contract.contract_subscription_date).plus({ days: contract.retentionDeadline }).toFormat('dd-LL-yyyy');
  data.valuePayContractor = totalPaymentPlannedValue - totalPaymentRealValue - totalPenaltiesValue;
  data.warrantyReturnContractor = totalPaymentRetentionValue;
  data.totalPendingPayment = contract.contract_value - totalPaymentRealValue - totalPenaltiesValue;
  await createPdf(data);
  res.send(data);
});

app.get("/send-email", async (req, res) => {
  try {
    const supabaseResult = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
    const { data, error } = await supabaseResult.from("contracts").select();
    if (error) {
      throw new Error(error);
    }
    for (let i = 0; i < 1; i++) {
      const contract = data[i];
      const { configNotifData, configNotifError } = await supabaseResult.from("notifications_configuration").select().eq("notif_type", "Contratos").single();
      const { participantsData, participantsError } = await supabaseResult.from("process_participants").select().eq("process_id", contract.process_id).eq("nofit_email", true);
      const participants = participantsData.map((participant) => {return participant.id});
      const { data: users, error: usersError } = await supabaseResult.from("users").select("email").in("id", participants);
      if (!contract.notif_end_contract_1 /* && configNotifData.notif_check_1 && DateTime.fromISO(contract.contract_end_date).diff(DateTime.now(), "days").days <= configNotifData.notif_check_1_days */) {
        await sendEmail({
          participants: users,
          subject: "Primera Notificación de Vencimiento de Contrato",
          diasRestantes: parseInt(DateTime.fromISO(contract.contract_end_date).diff(DateTime.now(), "days").days),
          contractNumber: contract.contract_number,
          fechaFinalizacion: DateTime.fromISO(contract.contract_end_date).toFormat("dd 'de' LLLL 'del' yyyy", { locale: "es" })
        });
        /* const { data: contractUpdate, error: contractUpdateError } = await supabaseResult.from("contracts").update({ notif_end_contract_1: true, notif_end_contract_date_1: DateTime.now().toISO()}).eq('id', contract.id).select();
        if (contractUpdateError) {
          throw new Error(contractUpdateError);
        } */
      }
      if (!contract.notif_end_contract_2 && configNotifData.notif_check_2 && DateTime.fromISO(contract.contract_end_date).diff(DateTime.now(), "days").days <= configNotifData.notif_check_2_days) {
        await sendEmail({
          participants: users,
          subject: "Segunda Notificación de Vencimiento de Contrato",
          diasRestantes: parseInt(DateTime.fromISO(contract.contract_end_date).diff(DateTime.now(), "days").days),
          contractNumber: contract.contract_number,
          fechaFinalizacion: DateTime.fromISO(contract.contract_end_date).toFormat("dd 'de' LLLL 'del' yyyy")
        });
        /* const { data: contractUpdate, error: contractUpdateError } = await supabaseResult.from("contracts").update({ notif_end_contract_2: true, notif_end_contract_date_2: DateTime.now().toISO()}).eq('id', contract.id).select();
        if (contractUpdateError) {
          throw new Error(contractUpdateError);
        } */
      }
      if (!contract.notif_end_contract_3 && configNotifData.notif_check_3 && DateTime.fromISO(contract.contract_end_date).diff(DateTime.now(), "days").days <= configNotifData.notif_check_3_days) {
        await sendEmail({
          participants: users,
          subject: "Tercera Notificación de Vencimiento de Contrato",
          diasRestantes: parseInt(DateTime.fromISO(contract.contract_end_date).diff(DateTime.now(), "days").days),
          contractNumber: contract.contract_number,
          fechaFinalizacion: DateTime.fromISO(contract.contract_end_date).toFormat("dd 'de' LLLL 'del' yyyy")
        });
        /* const { data: contractUpdate, error: contractUpdateError } = await supabaseResult.from("contracts").update({ notif_end_contract_3: true, notif_end_contract_date_3: DateTime.now().toISO()}).eq('id', contract.id).select();
        if (contractUpdateError) {
          throw new Error(contractUpdateError);
        } */
      }
    }
    res.status(200).send("Solicitud Exitosa.");
  } catch (error) {
    res.status(403).send(`Hubo un error: ${error}`);
  }
});

app.listen(PORT, () => {
    console.log(`Escuchando en: http://localhost:${PORT}`);
})