// @deno-types="npm:@types/morgan";
import morgan from "npm:morgan@1.10.0";

// @deno-types="npm:@types/express";
import express from "npm:express@4.18.3";
import { config } from "npm:dotenv@16.4.5";
import process from "node:process";
import { createClient } from '@supabase/supabase-js'
import { Database } from "../database.types.ts";

// @deno-types="npm:@types/luxon";
import { DateTime } from "npm:luxon@3.4.4";
import { Data, Delivery, Deliverable, Penalty, User } from "./interfaces.ts";

const PORT = process.env.PORT || 3000;

config();

const app = express();
app.use(morgan("dev"));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.post('/pdf-creator', async (req: express.Request, res: express.Response) => {
  const params = req.body;
  let data: Data;
  try {
    const supabase = createClient<Database>(process.env.SB_URL!, process.env.SB_SERVICE_KEY!);
    const { data: contract, error: contractError } = await supabase.from('contracts').select().eq('id', params.contractId).single();
    const { data: department, error: depError } = await supabase.from("departments").select().eq('id', contract?.department_id!).single();
    const { data: contractor, error: contractorError } = await supabase.from("contracts_contractors_shareholders").select().eq('id', contract?.contractor_id!).single();
    const { data: administrator, error: administratorError } = await supabase.from("users").select().eq('id', contract?.administrator_id!).single();
    const { data: technical, error: technicalError } = await supabase.from("users").select().eq('id', params.technicalId).single();
    const { data: user, error: userError } = await supabase.from("users").select().eq('id', params.userId).single();
    const { data: commisionUsers, error: commisionUsersError } = await supabase.from("users").select().in('id', params.commisionUsersIds);
    const { data: institution, error: institutionError } = await supabase.from("institution").select().eq('id', user?.institution_id!).single();
    const { data: aer, error: aerError } = await supabase.from("contracts_aer").select().eq('id', params.aerId).eq('contract_id', params.contractId).single();
    const { data: delivery, error: deliveryError } = await supabase.from("contracts_deliveries").select().in('payment_id', params.deliveryList);
    const { data: legalRepInst, error:legalRepInstError } = await supabase.from("users").select().eq('id', institution?.legal_representative!).single();
    let deliveryDataArray: Delivery[];
    let deliverablesDataArray: Deliverable[];
    let penaltiesDataArray: Penalty[];
    let commisionUsersDataArray: User[];
    let totalDeliveryDelay: number = 0;
    let totalPenaltiesValue: number = 0;
    let totalPaymentPlannedValue: number = 0;
    let totalPaymentRealValue: number = 0;
    let totalPaymentRetentionValue: number = 0;

    res.status(200).send(`Hello!`);
  } catch (error) {
    res.status(403).send(`Hubo un error: ${error}`);
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})