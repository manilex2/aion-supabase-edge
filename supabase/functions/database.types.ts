export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      change_log_contractors_shareholders: {
        Row: {
          address: string | null
          change_action: string | null
          change_date: string | null
          change_user: string | null
          contract_id: string | null
          contractors_shareholders_id: string | null
          created_at: string
          date_register: string | null
          deleted: boolean | null
          email: string | null
          government_id: string | null
          id: string
          institution_id: string | null
          legal_representative: string | null
          legal_representative_position: string | null
          name: string | null
          phone: string | null
          rup: string | null
          type: string | null
          user_register: string | null
        }
        Insert: {
          address?: string | null
          change_action?: string | null
          change_date?: string | null
          change_user?: string | null
          contract_id?: string | null
          contractors_shareholders_id?: string | null
          created_at?: string
          date_register?: string | null
          deleted?: boolean | null
          email?: string | null
          government_id?: string | null
          id?: string
          institution_id?: string | null
          legal_representative?: string | null
          legal_representative_position?: string | null
          name?: string | null
          phone?: string | null
          rup?: string | null
          type?: string | null
          user_register?: string | null
        }
        Update: {
          address?: string | null
          change_action?: string | null
          change_date?: string | null
          change_user?: string | null
          contract_id?: string | null
          contractors_shareholders_id?: string | null
          created_at?: string
          date_register?: string | null
          deleted?: boolean | null
          email?: string | null
          government_id?: string | null
          id?: string
          institution_id?: string | null
          legal_representative?: string | null
          legal_representative_position?: string | null
          name?: string | null
          phone?: string | null
          rup?: string | null
          type?: string | null
          user_register?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_change_log_contractors_shareholders_change_user_fkey"
            columns: ["change_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "public_change_log_contractors_shareholders_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_change_log_contractors_shareholders_contractors_sharehol"
            columns: ["contractors_shareholders_id"]
            isOneToOne: false
            referencedRelation: "contracts_contractors_shareholders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_change_log_contractors_shareholders_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institution"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_change_log_contractors_shareholders_user_register_fkey"
            columns: ["user_register"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      change_log_contracts: {
        Row: {
          actual_budget_execution_current_year: number | null
          administrator_id: string | null
          advance: string | null
          advance_file: string | null
          advance_percentage: number | null
          advance_value: number | null
          budget_execution: number | null
          change_action: string | null
          change_date: string | null
          change_user_id: string | null
          complete_register: boolean | null
          contract_end_date: string | null
          contract_ended: boolean | null
          contract_file: string | null
          contract_id: string | null
          contract_number: string | null
          contract_object: string | null
          contract_start_date: string | null
          contract_subscription_date: string | null
          contractor_id: string | null
          created_at: string
          date_register: string | null
          delivery_number: number | null
          delivery_payed: number | null
          delivery_period: string | null
          department: string | null
          expire_notification_1: boolean | null
          expire_notification_2: boolean | null
          extensions: string | null
          full_value: number | null
          id: string
          link_process: string | null
          notification_date: string | null
          other_delivery_period: string | null
          other_start_date: string | null
          pac_amount: number | null
          pay_on_delivery: string | null
          planned_budget_execution_current_year: number | null
          progress_budget_estimated: number | null
          progress_budget_real: number | null
          progress_payments: number | null
          progress_term: number | null
          project_id: string | null
          quit_advance: string | null
          recurrent: boolean | null
          replan_contract_end_date: string | null
          sercop_process_code: string | null
          start_condition: string | null
          status: string | null
          term: number | null
          total_paid: number | null
          user_register: string | null
          value_awarded: number | null
        }
        Insert: {
          actual_budget_execution_current_year?: number | null
          administrator_id?: string | null
          advance?: string | null
          advance_file?: string | null
          advance_percentage?: number | null
          advance_value?: number | null
          budget_execution?: number | null
          change_action?: string | null
          change_date?: string | null
          change_user_id?: string | null
          complete_register?: boolean | null
          contract_end_date?: string | null
          contract_ended?: boolean | null
          contract_file?: string | null
          contract_id?: string | null
          contract_number?: string | null
          contract_object?: string | null
          contract_start_date?: string | null
          contract_subscription_date?: string | null
          contractor_id?: string | null
          created_at?: string
          date_register?: string | null
          delivery_number?: number | null
          delivery_payed?: number | null
          delivery_period?: string | null
          department?: string | null
          expire_notification_1?: boolean | null
          expire_notification_2?: boolean | null
          extensions?: string | null
          full_value?: number | null
          id?: string
          link_process?: string | null
          notification_date?: string | null
          other_delivery_period?: string | null
          other_start_date?: string | null
          pac_amount?: number | null
          pay_on_delivery?: string | null
          planned_budget_execution_current_year?: number | null
          progress_budget_estimated?: number | null
          progress_budget_real?: number | null
          progress_payments?: number | null
          progress_term?: number | null
          project_id?: string | null
          quit_advance?: string | null
          recurrent?: boolean | null
          replan_contract_end_date?: string | null
          sercop_process_code?: string | null
          start_condition?: string | null
          status?: string | null
          term?: number | null
          total_paid?: number | null
          user_register?: string | null
          value_awarded?: number | null
        }
        Update: {
          actual_budget_execution_current_year?: number | null
          administrator_id?: string | null
          advance?: string | null
          advance_file?: string | null
          advance_percentage?: number | null
          advance_value?: number | null
          budget_execution?: number | null
          change_action?: string | null
          change_date?: string | null
          change_user_id?: string | null
          complete_register?: boolean | null
          contract_end_date?: string | null
          contract_ended?: boolean | null
          contract_file?: string | null
          contract_id?: string | null
          contract_number?: string | null
          contract_object?: string | null
          contract_start_date?: string | null
          contract_subscription_date?: string | null
          contractor_id?: string | null
          created_at?: string
          date_register?: string | null
          delivery_number?: number | null
          delivery_payed?: number | null
          delivery_period?: string | null
          department?: string | null
          expire_notification_1?: boolean | null
          expire_notification_2?: boolean | null
          extensions?: string | null
          full_value?: number | null
          id?: string
          link_process?: string | null
          notification_date?: string | null
          other_delivery_period?: string | null
          other_start_date?: string | null
          pac_amount?: number | null
          pay_on_delivery?: string | null
          planned_budget_execution_current_year?: number | null
          progress_budget_estimated?: number | null
          progress_budget_real?: number | null
          progress_payments?: number | null
          progress_term?: number | null
          project_id?: string | null
          quit_advance?: string | null
          recurrent?: boolean | null
          replan_contract_end_date?: string | null
          sercop_process_code?: string | null
          start_condition?: string | null
          status?: string | null
          term?: number | null
          total_paid?: number | null
          user_register?: string | null
          value_awarded?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_change_log_contracts_administrator_id_fkey"
            columns: ["administrator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_change_log_contracts_change_user_id_fkey"
            columns: ["change_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "public_change_log_contracts_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_change_log_contracts_contractor_id_fkey"
            columns: ["contractor_id"]
            isOneToOne: false
            referencedRelation: "contracts_contractors_shareholders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_change_log_contracts_department_fkey"
            columns: ["department"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_change_log_contracts_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_change_log_contracts_user_register_fkey"
            columns: ["user_register"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      contracts: {
        Row: {
          administrator_id: string | null
          advance_exist: string | null
          advance_file: string | null
          advance_percentage: number | null
          advance_value: number | null
          budget_id: string | null
          complete_register: boolean | null
          contract_end_date: string | null
          contract_ended: boolean | null
          contract_file: string | null
          contract_id: string | null
          contract_nature: string | null
          contract_number: string | null
          contract_object: string | null
          contract_start_date: string | null
          contract_subscription_date: string | null
          contract_type: string | null
          contract_value: number | null
          contractor_id: string | null
          created_at: string
          date_register: string | null
          department_id: string | null
          expire_notification_1: boolean | null
          expire_notification_2: boolean | null
          extensions: string | null
          full_value: number | null
          id: string
          institution_id: string | null
          link_process: string | null
          notif_end_contract_1: boolean | null
          notif_end_contract_2: boolean | null
          notif_end_contract_3: boolean | null
          notif_end_contract_date_1: string | null
          notif_end_contract_date_2: string | null
          notif_end_contract_date_3: string | null
          notification_date: string | null
          other_delivery_period: string | null
          other_start_date: string | null
          pay_on_delivery: string | null
          payment_mode: string | null
          payment_real_value_ratio: number | null
          penalty: string | null
          planned_execution_budget_current_year: number | null
          planned_execution_budget_total: number | null
          private_project_id: string | null
          progress_budget_estimated: number | null
          progress_budget_real: number | null
          progress_payments: number | null
          progress_term: number | null
          project_id: string | null
          quit_advance: string | null
          real_execution_budget_total: number | null
          recurrent: boolean | null
          replan_contract_end_date: string | null
          retention_deadline: number | null
          retention_devolution_date: string | null
          retention_exists: boolean | null
          retention_type: string | null
          retention_value: number | null
          sercop_process_code: string | null
          start_condition: string | null
          status: string | null
          term: number | null
          update_generated: number | null
          user_register: string | null
        }
        Insert: {
          administrator_id?: string | null
          advance_exist?: string | null
          advance_file?: string | null
          advance_percentage?: number | null
          advance_value?: number | null
          budget_id?: string | null
          complete_register?: boolean | null
          contract_end_date?: string | null
          contract_ended?: boolean | null
          contract_file?: string | null
          contract_id?: string | null
          contract_nature?: string | null
          contract_number?: string | null
          contract_object?: string | null
          contract_start_date?: string | null
          contract_subscription_date?: string | null
          contract_type?: string | null
          contract_value?: number | null
          contractor_id?: string | null
          created_at?: string
          date_register?: string | null
          department_id?: string | null
          expire_notification_1?: boolean | null
          expire_notification_2?: boolean | null
          extensions?: string | null
          full_value?: number | null
          id?: string
          institution_id?: string | null
          link_process?: string | null
          notif_end_contract_1?: boolean | null
          notif_end_contract_2?: boolean | null
          notif_end_contract_3?: boolean | null
          notif_end_contract_date_1?: string | null
          notif_end_contract_date_2?: string | null
          notif_end_contract_date_3?: string | null
          notification_date?: string | null
          other_delivery_period?: string | null
          other_start_date?: string | null
          pay_on_delivery?: string | null
          payment_mode?: string | null
          payment_real_value_ratio?: number | null
          penalty?: string | null
          planned_execution_budget_current_year?: number | null
          planned_execution_budget_total?: number | null
          private_project_id?: string | null
          progress_budget_estimated?: number | null
          progress_budget_real?: number | null
          progress_payments?: number | null
          progress_term?: number | null
          project_id?: string | null
          quit_advance?: string | null
          real_execution_budget_total?: number | null
          recurrent?: boolean | null
          replan_contract_end_date?: string | null
          retention_deadline?: number | null
          retention_devolution_date?: string | null
          retention_exists?: boolean | null
          retention_type?: string | null
          retention_value?: number | null
          sercop_process_code?: string | null
          start_condition?: string | null
          status?: string | null
          term?: number | null
          update_generated?: number | null
          user_register?: string | null
        }
        Update: {
          administrator_id?: string | null
          advance_exist?: string | null
          advance_file?: string | null
          advance_percentage?: number | null
          advance_value?: number | null
          budget_id?: string | null
          complete_register?: boolean | null
          contract_end_date?: string | null
          contract_ended?: boolean | null
          contract_file?: string | null
          contract_id?: string | null
          contract_nature?: string | null
          contract_number?: string | null
          contract_object?: string | null
          contract_start_date?: string | null
          contract_subscription_date?: string | null
          contract_type?: string | null
          contract_value?: number | null
          contractor_id?: string | null
          created_at?: string
          date_register?: string | null
          department_id?: string | null
          expire_notification_1?: boolean | null
          expire_notification_2?: boolean | null
          extensions?: string | null
          full_value?: number | null
          id?: string
          institution_id?: string | null
          link_process?: string | null
          notif_end_contract_1?: boolean | null
          notif_end_contract_2?: boolean | null
          notif_end_contract_3?: boolean | null
          notif_end_contract_date_1?: string | null
          notif_end_contract_date_2?: string | null
          notif_end_contract_date_3?: string | null
          notification_date?: string | null
          other_delivery_period?: string | null
          other_start_date?: string | null
          pay_on_delivery?: string | null
          payment_mode?: string | null
          payment_real_value_ratio?: number | null
          penalty?: string | null
          planned_execution_budget_current_year?: number | null
          planned_execution_budget_total?: number | null
          private_project_id?: string | null
          progress_budget_estimated?: number | null
          progress_budget_real?: number | null
          progress_payments?: number | null
          progress_term?: number | null
          project_id?: string | null
          quit_advance?: string | null
          real_execution_budget_total?: number | null
          recurrent?: boolean | null
          replan_contract_end_date?: string | null
          retention_deadline?: number | null
          retention_devolution_date?: string | null
          retention_exists?: boolean | null
          retention_type?: string | null
          retention_value?: number | null
          sercop_process_code?: string | null
          start_condition?: string | null
          status?: string | null
          term?: number | null
          update_generated?: number | null
          user_register?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contracts_administrator_id_fkey"
            columns: ["administrator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_department_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_project_reference_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_user_register_fkey"
            columns: ["user_register"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_budget_id_fkey"
            columns: ["budget_id"]
            isOneToOne: false
            referencedRelation: "project_budget_code"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_contractor_id_fkey"
            columns: ["contractor_id"]
            isOneToOne: false
            referencedRelation: "contracts_contractors_shareholders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institution"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_project_private_id_fkey"
            columns: ["private_project_id"]
            isOneToOne: false
            referencedRelation: "project_private_project"
            referencedColumns: ["id"]
          }
        ]
      }
      contracts_aer: {
        Row: {
          aer_type: string | null
          ask_date: string | null
          contract_id: string | null
          created_at: string
          date_register: string | null
          designation_date: string | null
          id: string
          portal_loaded: boolean | null
          publication_date: string | null
          support_file_1: string | null
          support_file_2: string | null
          support_file_3: string | null
          support_file_4: string | null
          suscription_date: string | null
          user_register: string | null
          value: number | null
        }
        Insert: {
          aer_type?: string | null
          ask_date?: string | null
          contract_id?: string | null
          created_at?: string
          date_register?: string | null
          designation_date?: string | null
          id?: string
          portal_loaded?: boolean | null
          publication_date?: string | null
          support_file_1?: string | null
          support_file_2?: string | null
          support_file_3?: string | null
          support_file_4?: string | null
          suscription_date?: string | null
          user_register?: string | null
          value?: number | null
        }
        Update: {
          aer_type?: string | null
          ask_date?: string | null
          contract_id?: string | null
          created_at?: string
          date_register?: string | null
          designation_date?: string | null
          id?: string
          portal_loaded?: boolean | null
          publication_date?: string | null
          support_file_1?: string | null
          support_file_2?: string | null
          support_file_3?: string | null
          support_file_4?: string | null
          suscription_date?: string | null
          user_register?: string | null
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_aer_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_aer_user_register_fkey"
            columns: ["user_register"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      contracts_contractors_shareholders: {
        Row: {
          address: string | null
          city: string | null
          created_at: string
          date_register: string | null
          deleted: boolean | null
          email: string | null
          fts: unknown | null
          government_id: string | null
          id: string
          institution_id: string | null
          legal_representative: string | null
          legal_representative_position: string | null
          name: string | null
          phone: string | null
          rup: string | null
          state: string | null
          type: string | null
          user_register: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string
          date_register?: string | null
          deleted?: boolean | null
          email?: string | null
          fts?: unknown | null
          government_id?: string | null
          id?: string
          institution_id?: string | null
          legal_representative?: string | null
          legal_representative_position?: string | null
          name?: string | null
          phone?: string | null
          rup?: string | null
          state?: string | null
          type?: string | null
          user_register?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string
          date_register?: string | null
          deleted?: boolean | null
          email?: string | null
          fts?: unknown | null
          government_id?: string | null
          id?: string
          institution_id?: string | null
          legal_representative?: string | null
          legal_representative_position?: string | null
          name?: string | null
          phone?: string | null
          rup?: string | null
          state?: string | null
          type?: string | null
          user_register?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_contractors_shareholders_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institution"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contractors_shareholders_user_register_fkey"
            columns: ["user_register"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      contracts_deliverables: {
        Row: {
          comments: string | null
          complete: boolean | null
          complete_date: string | null
          complete_file: string | null
          complete_file_name: string | null
          created_at: string
          deliverable_order: number | null
          delivery_id: string | null
          detail: string | null
          id: string
          registrant_user: string | null
          registration_date: string | null
        }
        Insert: {
          comments?: string | null
          complete?: boolean | null
          complete_date?: string | null
          complete_file?: string | null
          complete_file_name?: string | null
          created_at?: string
          deliverable_order?: number | null
          delivery_id?: string | null
          detail?: string | null
          id?: string
          registrant_user?: string | null
          registration_date?: string | null
        }
        Update: {
          comments?: string | null
          complete?: boolean | null
          complete_date?: string | null
          complete_file?: string | null
          complete_file_name?: string | null
          created_at?: string
          deliverable_order?: number | null
          delivery_id?: string | null
          detail?: string | null
          id?: string
          registrant_user?: string | null
          registration_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_contracts_deliverables_registrant_user_fkey"
            columns: ["registrant_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "public_deliverables_delivery_id_fkey"
            columns: ["delivery_id"]
            isOneToOne: false
            referencedRelation: "contracts_deliveries"
            referencedColumns: ["id"]
          }
        ]
      }
      contracts_deliveries: {
        Row: {
          CO_OT_OC_id: string | null
          contract_father_id: string | null
          created_at: string
          delay_days: number | null
          delivery_complete: boolean | null
          delivery_detail: string | null
          delivery_number: number | null
          delivery_planned_date: string | null
          delivery_real_date: string | null
          delivery_type: string | null
          delivery_weight: number | null
          id: string
          payment_id: string | null
          private_macroproject_id: string | null
          private_phase_id: string | null
          private_project_id: string | null
          registrant_user: string | null
          registration_date: string | null
        }
        Insert: {
          CO_OT_OC_id?: string | null
          contract_father_id?: string | null
          created_at?: string
          delay_days?: number | null
          delivery_complete?: boolean | null
          delivery_detail?: string | null
          delivery_number?: number | null
          delivery_planned_date?: string | null
          delivery_real_date?: string | null
          delivery_type?: string | null
          delivery_weight?: number | null
          id?: string
          payment_id?: string | null
          private_macroproject_id?: string | null
          private_phase_id?: string | null
          private_project_id?: string | null
          registrant_user?: string | null
          registration_date?: string | null
        }
        Update: {
          CO_OT_OC_id?: string | null
          contract_father_id?: string | null
          created_at?: string
          delay_days?: number | null
          delivery_complete?: boolean | null
          delivery_detail?: string | null
          delivery_number?: number | null
          delivery_planned_date?: string | null
          delivery_real_date?: string | null
          delivery_type?: string | null
          delivery_weight?: number | null
          id?: string
          payment_id?: string | null
          private_macroproject_id?: string | null
          private_phase_id?: string | null
          private_project_id?: string | null
          registrant_user?: string | null
          registration_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_contracts_deliveries_contract_father_id_fkey"
            columns: ["contract_father_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_deliveries_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "contracts_payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_deliveries_private_macroproject_id_fkey"
            columns: ["private_macroproject_id"]
            isOneToOne: false
            referencedRelation: "project_private_macroproject"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_deliveries_private_phase_id_fkey"
            columns: ["private_phase_id"]
            isOneToOne: false
            referencedRelation: "project_private_phases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_deliveries_private_project_id_fkey"
            columns: ["private_project_id"]
            isOneToOne: false
            referencedRelation: "project_private_project"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_deliveries_registrant_user_fkey"
            columns: ["registrant_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      contracts_deliveries_frequency: {
        Row: {
          created_at: string
          days: number | null
          default_system: boolean
          frequency_type: string | null
          id: string
          months: number | null
          name: string | null
        }
        Insert: {
          created_at?: string
          days?: number | null
          default_system?: boolean
          frequency_type?: string | null
          id?: string
          months?: number | null
          name?: string | null
        }
        Update: {
          created_at?: string
          days?: number | null
          default_system?: boolean
          frequency_type?: string | null
          id?: string
          months?: number | null
          name?: string | null
        }
        Relationships: []
      }
      contracts_evaluation: {
        Row: {
          actions: string | null
          contract_id: string | null
          created_at: string
          date: string | null
          date_finished: string | null
          date_register: string | null
          detail_observation: string | null
          finished: boolean | null
          id: string
          responsible: string | null
          support_file: string | null
          user_finished: string | null
          user_register: string | null
        }
        Insert: {
          actions?: string | null
          contract_id?: string | null
          created_at?: string
          date?: string | null
          date_finished?: string | null
          date_register?: string | null
          detail_observation?: string | null
          finished?: boolean | null
          id?: string
          responsible?: string | null
          support_file?: string | null
          user_finished?: string | null
          user_register?: string | null
        }
        Update: {
          actions?: string | null
          contract_id?: string | null
          created_at?: string
          date?: string | null
          date_finished?: string | null
          date_register?: string | null
          detail_observation?: string | null
          finished?: boolean | null
          id?: string
          responsible?: string | null
          support_file?: string | null
          user_finished?: string | null
          user_register?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_evaluation_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_evaluation_responsible_fkey"
            columns: ["responsible"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "public_evaluation_user_finished_fkey"
            columns: ["user_finished"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "public_evaluation_user_register_fkey"
            columns: ["user_register"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      contracts_observations: {
        Row: {
          contract_id: string | null
          created_at: string
          date_register: string | null
          id: string
          observation_date: string | null
          observation_support: string | null
          observation_term: number | null
          observation_type: string | null
          observation_value: number | null
          user_register: string | null
        }
        Insert: {
          contract_id?: string | null
          created_at?: string
          date_register?: string | null
          id?: string
          observation_date?: string | null
          observation_support?: string | null
          observation_term?: number | null
          observation_type?: string | null
          observation_value?: number | null
          user_register?: string | null
        }
        Update: {
          contract_id?: string | null
          created_at?: string
          date_register?: string | null
          id?: string
          observation_date?: string | null
          observation_support?: string | null
          observation_term?: number | null
          observation_type?: string | null
          observation_value?: number | null
          user_register?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_observations_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_observations_user_register_fkey"
            columns: ["user_register"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      contracts_order_purchase: {
        Row: {
          advance_percentage: number | null
          amount: number | null
          contract_id: string | null
          contractor_id: string | null
          created_at: string
          date_register: string | null
          deadline: string | null
          delivery_date: string | null
          description: string | null
          id: string
          modelo: string | null
          mz: string | null
          order_date: string | null
          order_number: string | null
          ot_type: string | null
          price_total: number | null
          price_unit: number | null
          shipping_method: string | null
          solar: string | null
          user_register: string | null
        }
        Insert: {
          advance_percentage?: number | null
          amount?: number | null
          contract_id?: string | null
          contractor_id?: string | null
          created_at?: string
          date_register?: string | null
          deadline?: string | null
          delivery_date?: string | null
          description?: string | null
          id?: string
          modelo?: string | null
          mz?: string | null
          order_date?: string | null
          order_number?: string | null
          ot_type?: string | null
          price_total?: number | null
          price_unit?: number | null
          shipping_method?: string | null
          solar?: string | null
          user_register?: string | null
        }
        Update: {
          advance_percentage?: number | null
          amount?: number | null
          contract_id?: string | null
          contractor_id?: string | null
          created_at?: string
          date_register?: string | null
          deadline?: string | null
          delivery_date?: string | null
          description?: string | null
          id?: string
          modelo?: string | null
          mz?: string | null
          order_date?: string | null
          order_number?: string | null
          ot_type?: string | null
          price_total?: number | null
          price_unit?: number | null
          shipping_method?: string | null
          solar?: string | null
          user_register?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_contracts_order_purchase_contractor_id_fkey"
            columns: ["contractor_id"]
            isOneToOne: false
            referencedRelation: "contracts_contractors_shareholders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_order_purchase_shipping_method_fkey"
            columns: ["shipping_method"]
            isOneToOne: false
            referencedRelation: "contracts_shipping_method"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_order_purchase_user_register_fkey"
            columns: ["user_register"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_purchase_order_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          }
        ]
      }
      contracts_order_work: {
        Row: {
          contract_id: string | null
          contractor_id: string | null
          created_at: string
          date_register: string | null
          deadline: string | null
          description: string | null
          id: string
          order_date: string | null
          order_number: string | null
          payment_form: string | null
          price: number | null
          priority: string | null
          private_macroproject_id: string | null
          private_phase_id: string | null
          private_project_id: string | null
          progress: number | null
          service_location: string | null
          tipo_ot: string | null
          user_register: string | null
        }
        Insert: {
          contract_id?: string | null
          contractor_id?: string | null
          created_at?: string
          date_register?: string | null
          deadline?: string | null
          description?: string | null
          id?: string
          order_date?: string | null
          order_number?: string | null
          payment_form?: string | null
          price?: number | null
          priority?: string | null
          private_macroproject_id?: string | null
          private_phase_id?: string | null
          private_project_id?: string | null
          progress?: number | null
          service_location?: string | null
          tipo_ot?: string | null
          user_register?: string | null
        }
        Update: {
          contract_id?: string | null
          contractor_id?: string | null
          created_at?: string
          date_register?: string | null
          deadline?: string | null
          description?: string | null
          id?: string
          order_date?: string | null
          order_number?: string | null
          payment_form?: string | null
          price?: number | null
          priority?: string | null
          private_macroproject_id?: string | null
          private_phase_id?: string | null
          private_project_id?: string | null
          progress?: number | null
          service_location?: string | null
          tipo_ot?: string | null
          user_register?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_contracts_order_work_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_order_work_contractor_id_fkey"
            columns: ["contractor_id"]
            isOneToOne: false
            referencedRelation: "contracts_contractors_shareholders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_order_work_user_register_fkey"
            columns: ["user_register"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_private_order_work_private_macroproject_id_fke"
            columns: ["private_macroproject_id"]
            isOneToOne: false
            referencedRelation: "project_private_macroproject"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_private_order_work_private_phase_id_fkey"
            columns: ["private_phase_id"]
            isOneToOne: false
            referencedRelation: "project_private_phases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_private_order_work_private_project_id_fkey"
            columns: ["private_project_id"]
            isOneToOne: false
            referencedRelation: "project_private_project"
            referencedColumns: ["id"]
          }
        ]
      }
      contracts_payments: {
        Row: {
          aer_id: string | null
          bill_file: string | null
          bill_number: string | null
          CO_OT_OC_id: string | null
          commets: string | null
          contract_father_id: string | null
          created_at: string
          deliveries_related: boolean | null
          delivery_id: string | null
          id: string
          other_files: string | null
          payment_planned_date: string | null
          payment_planned_value: number | null
          payment_real_date: string | null
          payment_real_value: number | null
          private_macroproject_id: string | null
          private_phases_id: string | null
          private_project_id: string | null
          retention_value: number | null
        }
        Insert: {
          aer_id?: string | null
          bill_file?: string | null
          bill_number?: string | null
          CO_OT_OC_id?: string | null
          commets?: string | null
          contract_father_id?: string | null
          created_at?: string
          deliveries_related?: boolean | null
          delivery_id?: string | null
          id?: string
          other_files?: string | null
          payment_planned_date?: string | null
          payment_planned_value?: number | null
          payment_real_date?: string | null
          payment_real_value?: number | null
          private_macroproject_id?: string | null
          private_phases_id?: string | null
          private_project_id?: string | null
          retention_value?: number | null
        }
        Update: {
          aer_id?: string | null
          bill_file?: string | null
          bill_number?: string | null
          CO_OT_OC_id?: string | null
          commets?: string | null
          contract_father_id?: string | null
          created_at?: string
          deliveries_related?: boolean | null
          delivery_id?: string | null
          id?: string
          other_files?: string | null
          payment_planned_date?: string | null
          payment_planned_value?: number | null
          payment_real_date?: string | null
          payment_real_value?: number | null
          private_macroproject_id?: string | null
          private_phases_id?: string | null
          private_project_id?: string | null
          retention_value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_contracts_payments_aer_id_fkey"
            columns: ["aer_id"]
            isOneToOne: false
            referencedRelation: "contracts_aer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_payments_contract_father_id_fkey"
            columns: ["contract_father_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_payments_delivery_id_fkey"
            columns: ["delivery_id"]
            isOneToOne: false
            referencedRelation: "contracts_deliveries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_payments_private_macroproject_id_fkey"
            columns: ["private_macroproject_id"]
            isOneToOne: false
            referencedRelation: "project_private_macroproject"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_payments_private_phases_id_fkey"
            columns: ["private_phases_id"]
            isOneToOne: false
            referencedRelation: "project_private_phases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_payments_private_project_id_fkey"
            columns: ["private_project_id"]
            isOneToOne: false
            referencedRelation: "project_private_project"
            referencedColumns: ["id"]
          }
        ]
      }
      contracts_payments_penalties: {
        Row: {
          CO_OT_OC_id: string | null
          contract_father_id: string | null
          created_at: string
          id: string
          payment_id: string | null
          penalty_date: string | null
          penalty_detail: string | null
          penalty_file: string | null
          penalty_value: number | null
          private_macroproject_id: string | null
          private_phase_id: string | null
          private_project_id: string | null
        }
        Insert: {
          CO_OT_OC_id?: string | null
          contract_father_id?: string | null
          created_at?: string
          id?: string
          payment_id?: string | null
          penalty_date?: string | null
          penalty_detail?: string | null
          penalty_file?: string | null
          penalty_value?: number | null
          private_macroproject_id?: string | null
          private_phase_id?: string | null
          private_project_id?: string | null
        }
        Update: {
          CO_OT_OC_id?: string | null
          contract_father_id?: string | null
          created_at?: string
          id?: string
          payment_id?: string | null
          penalty_date?: string | null
          penalty_detail?: string | null
          penalty_file?: string | null
          penalty_value?: number | null
          private_macroproject_id?: string | null
          private_phase_id?: string | null
          private_project_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_contracts_payments_penalties_contract_father_id_fkey"
            columns: ["contract_father_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_payments_penalties_contract_id_fkey"
            columns: ["CO_OT_OC_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_payments_penalties_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "contracts_payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_payments_penalties_private_macroproject_id_fke"
            columns: ["private_macroproject_id"]
            isOneToOne: false
            referencedRelation: "project_private_macroproject"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_payments_penalties_private_phase_id_fkey"
            columns: ["private_phase_id"]
            isOneToOne: false
            referencedRelation: "project_private_phases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_payments_penalties_private_project_id_fkey"
            columns: ["private_project_id"]
            isOneToOne: false
            referencedRelation: "project_private_project"
            referencedColumns: ["id"]
          }
        ]
      }
      contracts_shipping_method: {
        Row: {
          created_at: string
          id: string
          nombre: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          nombre?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          nombre?: string | null
        }
        Relationships: []
      }
      contracts_stakes: {
        Row: {
          created_at: string
          id: string
          mother: string | null
          son: string | null
          stake: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          mother?: string | null
          son?: string | null
          stake?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          mother?: string | null
          son?: string | null
          stake?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_stakes_mother_fkey"
            columns: ["mother"]
            isOneToOne: false
            referencedRelation: "contracts_contractors_shareholders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_stakes_son_fkey"
            columns: ["son"]
            isOneToOne: false
            referencedRelation: "contracts_contractors_shareholders"
            referencedColumns: ["id"]
          }
        ]
      }
      contracts_warranties: {
        Row: {
          contract_id: string | null
          created_at: string
          expiration_date: string
          expire_notification: boolean | null
          id: string
          issue_date: string
          issued_by: string | null
          start_date: string | null
          support_file: string | null
          type_id: string
          value: number | null
        }
        Insert: {
          contract_id?: string | null
          created_at?: string
          expiration_date: string
          expire_notification?: boolean | null
          id?: string
          issue_date: string
          issued_by?: string | null
          start_date?: string | null
          support_file?: string | null
          type_id?: string
          value?: number | null
        }
        Update: {
          contract_id?: string | null
          created_at?: string
          expiration_date?: string
          expire_notification?: boolean | null
          id?: string
          issue_date?: string
          issued_by?: string | null
          start_date?: string | null
          support_file?: string | null
          type_id?: string
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_contracts_warranties_issued_by_fkey"
            columns: ["issued_by"]
            isOneToOne: false
            referencedRelation: "contracts_warranty_issuer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_warranties_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "contracts_warranty_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_warranties_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          }
        ]
      }
      contracts_warranty_issuer: {
        Row: {
          address: string | null
          created_at: string
          email: string | null
          gob_id: string | null
          id: string
          name: string | null
          phone: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          email?: string | null
          gob_id?: string | null
          id?: string
          name?: string | null
          phone?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          email?: string | null
          gob_id?: string | null
          id?: string
          name?: string | null
          phone?: string | null
          website?: string | null
        }
        Relationships: []
      }
      contracts_warranty_types: {
        Row: {
          created_at: string
          id: string
          system_default: boolean | null
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          system_default?: boolean | null
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          system_default?: boolean | null
          type?: string | null
        }
        Relationships: []
      }
      departments: {
        Row: {
          code: string | null
          created_at: string
          director: string | null
          icon: string | null
          icon_dark: string | null
          id: string
          institution_id: string | null
          nombre: string
          seleccion_temp: boolean | null
          year: number | null
        }
        Insert: {
          code?: string | null
          created_at?: string
          director?: string | null
          icon?: string | null
          icon_dark?: string | null
          id?: string
          institution_id?: string | null
          nombre?: string
          seleccion_temp?: boolean | null
          year?: number | null
        }
        Update: {
          code?: string | null
          created_at?: string
          director?: string | null
          icon?: string | null
          icon_dark?: string | null
          id?: string
          institution_id?: string | null
          nombre?: string
          seleccion_temp?: boolean | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "departments_director_fkey"
            columns: ["director"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "departments_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institution"
            referencedColumns: ["id"]
          }
        ]
      }
      departments_expenses: {
        Row: {
          bill_number: string | null
          category: string | null
          created_at: string
          department: string | null
          description: string | null
          id: string
          month: string | null
          payment_date: string | null
          ruc: string | null
          value: number | null
          year: number | null
        }
        Insert: {
          bill_number?: string | null
          category?: string | null
          created_at?: string
          department?: string | null
          description?: string | null
          id?: string
          month?: string | null
          payment_date?: string | null
          ruc?: string | null
          value?: number | null
          year?: number | null
        }
        Update: {
          bill_number?: string | null
          category?: string | null
          created_at?: string
          department?: string | null
          description?: string | null
          id?: string
          month?: string | null
          payment_date?: string | null
          ruc?: string | null
          value?: number | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "expenses_department_fkey"
            columns: ["department"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          }
        ]
      }
      documents: {
        Row: {
          action: string | null
          action_performed: string | null
          created_at: string
          created_by: string | null
          created_date: string | null
          department_document_id: string | null
          doc_code: string | null
          document_type: string | null
          done_to_check: boolean | null
          expire_notification_1: boolean | null
          finished: boolean | null
          id: string
          max_date_dispatch: string | null
          priority: string | null
          reassignment_aproved: boolean | null
          reassignment_on_check: boolean | null
          reception_date: string | null
          sender: string | null
          subject: string | null
          term_attention: number | null
        }
        Insert: {
          action?: string | null
          action_performed?: string | null
          created_at?: string
          created_by?: string | null
          created_date?: string | null
          department_document_id?: string | null
          doc_code?: string | null
          document_type?: string | null
          done_to_check?: boolean | null
          expire_notification_1?: boolean | null
          finished?: boolean | null
          id?: string
          max_date_dispatch?: string | null
          priority?: string | null
          reassignment_aproved?: boolean | null
          reassignment_on_check?: boolean | null
          reception_date?: string | null
          sender?: string | null
          subject?: string | null
          term_attention?: number | null
        }
        Update: {
          action?: string | null
          action_performed?: string | null
          created_at?: string
          created_by?: string | null
          created_date?: string | null
          department_document_id?: string | null
          doc_code?: string | null
          document_type?: string | null
          done_to_check?: boolean | null
          expire_notification_1?: boolean | null
          finished?: boolean | null
          id?: string
          max_date_dispatch?: string | null
          priority?: string | null
          reassignment_aproved?: boolean | null
          reassignment_on_check?: boolean | null
          reception_date?: string | null
          sender?: string | null
          subject?: string | null
          term_attention?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_department_document_fkey"
            columns: ["department_document_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          }
        ]
      }
      documents_comments: {
        Row: {
          comment: string | null
          created_at: string
          date_register: string | null
          document_id: string | null
          id: string
          user: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          date_register?: string | null
          document_id?: string | null
          id?: string
          user?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          date_register?: string | null
          document_id?: string | null
          id?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_document_document_ref_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_document_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      documents_observations: {
        Row: {
          comment: string | null
          created_at: string
          date: string | null
          document_id: string | null
          id: string
          receiver: string | null
          transmitter: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          date?: string | null
          document_id?: string | null
          id?: string
          receiver?: string | null
          transmitter?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          date?: string | null
          document_id?: string | null
          id?: string
          receiver?: string | null
          transmitter?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_observations_documents_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_observations_documents_receiver_fkey"
            columns: ["receiver"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "public_observations_documents_transmitter_fkey"
            columns: ["transmitter"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      documents_reassignment: {
        Row: {
          approval: boolean | null
          approval_user: string | null
          created_at: string
          date_register: string | null
          document_id: string | null
          final_department: string | null
          id: string
          initial_department: string | null
          justification: string | null
          petitioner: string | null
        }
        Insert: {
          approval?: boolean | null
          approval_user?: string | null
          created_at?: string
          date_register?: string | null
          document_id?: string | null
          final_department?: string | null
          id?: string
          initial_department?: string | null
          justification?: string | null
          petitioner?: string | null
        }
        Update: {
          approval?: boolean | null
          approval_user?: string | null
          created_at?: string
          date_register?: string | null
          document_id?: string | null
          final_department?: string | null
          id?: string
          initial_department?: string | null
          justification?: string | null
          petitioner?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_reassignment_approval_user_fkey"
            columns: ["approval_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "public_reassignment_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_reassignment_final_department_fkey"
            columns: ["final_department"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_reassignment_initial_department_fkey"
            columns: ["initial_department"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_reassignment_petitioner_fkey"
            columns: ["petitioner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      entity: {
        Row: {
          created_at: string
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      global_parameters: {
        Row: {
          created_at: string
          email_from: string | null
          email_host: string | null
          email_password: string | null
          email_port: number | null
          email_service: string | null
          email_user: string | null
          id: string
        }
        Insert: {
          created_at?: string
          email_from?: string | null
          email_host?: string | null
          email_password?: string | null
          email_port?: number | null
          email_service?: string | null
          email_user?: string | null
          id?: string
        }
        Update: {
          created_at?: string
          email_from?: string | null
          email_host?: string | null
          email_password?: string | null
          email_port?: number | null
          email_service?: string | null
          email_user?: string | null
          id?: string
        }
        Relationships: []
      }
      institution: {
        Row: {
          city: string | null
          created_at: string
          id: string
          legal_representative: string | null
          logo: string | null
          mission: string | null
          nombre: string | null
          ruc: string | null
          state: string | null
          type: string | null
          values: string[] | null
          vision: string | null
          year: number | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          id?: string
          legal_representative?: string | null
          logo?: string | null
          mission?: string | null
          nombre?: string | null
          ruc?: string | null
          state?: string | null
          type?: string | null
          values?: string[] | null
          vision?: string | null
          year?: number | null
        }
        Update: {
          city?: string | null
          created_at?: string
          id?: string
          legal_representative?: string | null
          logo?: string | null
          mission?: string | null
          nombre?: string | null
          ruc?: string | null
          state?: string | null
          type?: string | null
          values?: string[] | null
          vision?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_institution_legal_representative_fkey"
            columns: ["legal_representative"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      institution_plan_activo: {
        Row: {
          contratos: boolean | null
          created_at: string
          documentos: boolean | null
          id: string
          institution_id: string | null
          max_users: number | null
          pac: boolean | null
          poa: boolean | null
          presupuesto: boolean | null
          procesos: boolean | null
          recomendaciones: boolean | null
          tareas: boolean | null
        }
        Insert: {
          contratos?: boolean | null
          created_at?: string
          documentos?: boolean | null
          id?: string
          institution_id?: string | null
          max_users?: number | null
          pac?: boolean | null
          poa?: boolean | null
          presupuesto?: boolean | null
          procesos?: boolean | null
          recomendaciones?: boolean | null
          tareas?: boolean | null
        }
        Update: {
          contratos?: boolean | null
          created_at?: string
          documentos?: boolean | null
          id?: string
          institution_id?: string | null
          max_users?: number | null
          pac?: boolean | null
          poa?: boolean | null
          presupuesto?: boolean | null
          procesos?: boolean | null
          recomendaciones?: boolean | null
          tareas?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "public_plan_activo_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institution"
            referencedColumns: ["id"]
          }
        ]
      }
      location_cities: {
        Row: {
          city: string | null
          created_at: string
          id: number
          state: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          id?: number
          state?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          id?: number
          state?: string | null
        }
        Relationships: []
      }
      location_states: {
        Row: {
          created_at: string
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          contract_id: string | null
          created_at: string
          date_scheduling: string | null
          description: string | null
          document_id: string | null
          id: string
          poa_id: string | null
          send_date: string | null
          send_to: string | null
          send_to_name: string | null
          task_id: string | null
          type: string | null
        }
        Insert: {
          contract_id?: string | null
          created_at?: string
          date_scheduling?: string | null
          description?: string | null
          document_id?: string | null
          id?: string
          poa_id?: string | null
          send_date?: string | null
          send_to?: string | null
          send_to_name?: string | null
          task_id?: string | null
          type?: string | null
        }
        Update: {
          contract_id?: string | null
          created_at?: string
          date_scheduling?: string | null
          description?: string | null
          document_id?: string | null
          id?: string
          poa_id?: string | null
          send_date?: string | null
          send_to?: string | null
          send_to_name?: string | null
          task_id?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_contract_ref_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_document_ref_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_poa_ref_fkey"
            columns: ["poa_id"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_task_ref_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          }
        ]
      }
      paginas: {
        Row: {
          created_at: string
          id: string
          nombre: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          nombre?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          nombre?: string | null
        }
        Relationships: []
      }
      procedures_days: {
        Row: {
          created_at: string
          days_contract_signing_date: number | null
          days_project_start_date: number | null
          days_publication_portal_date: number | null
          days_relevance_response_date: number | null
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string
          days_contract_signing_date?: number | null
          days_project_start_date?: number | null
          days_publication_portal_date?: number | null
          days_relevance_response_date?: number | null
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string
          days_contract_signing_date?: number | null
          days_project_start_date?: number | null
          days_publication_portal_date?: number | null
          days_relevance_response_date?: number | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      process_activities: {
        Row: {
          activity_order: number | null
          completed: boolean | null
          completed_date: string | null
          created_at: string
          deadline: string | null
          duration: number | null
          duration_type: string | null
          end_date: string | null
          file_support: string | null
          id: string
          name: string | null
          prev_activity_id: string | null
          start_date: string | null
          step_id: string | null
        }
        Insert: {
          activity_order?: number | null
          completed?: boolean | null
          completed_date?: string | null
          created_at?: string
          deadline?: string | null
          duration?: number | null
          duration_type?: string | null
          end_date?: string | null
          file_support?: string | null
          id?: string
          name?: string | null
          prev_activity_id?: string | null
          start_date?: string | null
          step_id?: string | null
        }
        Update: {
          activity_order?: number | null
          completed?: boolean | null
          completed_date?: string | null
          created_at?: string
          deadline?: string | null
          duration?: number | null
          duration_type?: string | null
          end_date?: string | null
          file_support?: string | null
          id?: string
          name?: string | null
          prev_activity_id?: string | null
          start_date?: string | null
          step_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_activities_prev_activity_id_fkey"
            columns: ["prev_activity_id"]
            isOneToOne: false
            referencedRelation: "process_activities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_activities_step_id_fkey"
            columns: ["step_id"]
            isOneToOne: false
            referencedRelation: "process_steps_template"
            referencedColumns: ["id"]
          }
        ]
      }
      process_bg_color: {
        Row: {
          color: string | null
          created_at: string
          id: string
          name: string | null
          process_id: string | null
          text_color: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string
          id?: string
          name?: string | null
          process_id?: string | null
          text_color?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string
          id?: string
          name?: string | null
          process_id?: string | null
          text_color?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_bg_color_process_id_fkey"
            columns: ["process_id"]
            isOneToOne: false
            referencedRelation: "process_template"
            referencedColumns: ["id"]
          }
        ]
      }
      process_participants: {
        Row: {
          created_at: string
          id: string
          participant_department_id: string | null
          process_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          participant_department_id?: string | null
          process_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          participant_department_id?: string | null
          process_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_process_participants_participant_department_id_fkey"
            columns: ["participant_department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_process_participants_process_id_fkey"
            columns: ["process_id"]
            isOneToOne: false
            referencedRelation: "process_template"
            referencedColumns: ["id"]
          }
        ]
      }
      process_steps_order: {
        Row: {
          created_at: string
          id: string
          order: number | null
          step_id: string | null
          step_prev_next_id: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          order?: number | null
          step_id?: string | null
          step_prev_next_id?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          order?: number | null
          step_id?: string | null
          step_prev_next_id?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_steps_order_step_id_fkey"
            columns: ["step_id"]
            isOneToOne: false
            referencedRelation: "process_steps_template"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_steps_order_step_prev_next_id_fkey"
            columns: ["step_prev_next_id"]
            isOneToOne: false
            referencedRelation: "process_steps_template"
            referencedColumns: ["id"]
          }
        ]
      }
      process_steps_template: {
        Row: {
          created_at: string
          deadline: string | null
          estimated_time_days: number | null
          id: string
          plan_start_date: string | null
          process_id: string | null
          real_end_date: string | null
          real_start_date: string | null
          replan_deadline: string | null
          replan_start_date: string | null
          responsible_dep_id: string | null
          responsible_user_id: string | null
          status: string | null
          step_complete: boolean | null
          step_description: string | null
          step_name: string | null
          step_order: number | null
        }
        Insert: {
          created_at?: string
          deadline?: string | null
          estimated_time_days?: number | null
          id?: string
          plan_start_date?: string | null
          process_id?: string | null
          real_end_date?: string | null
          real_start_date?: string | null
          replan_deadline?: string | null
          replan_start_date?: string | null
          responsible_dep_id?: string | null
          responsible_user_id?: string | null
          status?: string | null
          step_complete?: boolean | null
          step_description?: string | null
          step_name?: string | null
          step_order?: number | null
        }
        Update: {
          created_at?: string
          deadline?: string | null
          estimated_time_days?: number | null
          id?: string
          plan_start_date?: string | null
          process_id?: string | null
          real_end_date?: string | null
          real_start_date?: string | null
          replan_deadline?: string | null
          replan_start_date?: string | null
          responsible_dep_id?: string | null
          responsible_user_id?: string | null
          status?: string | null
          step_complete?: boolean | null
          step_description?: string | null
          step_name?: string | null
          step_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_steps_process_id_fkey"
            columns: ["process_id"]
            isOneToOne: false
            referencedRelation: "process_template"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_steps_responsible_dep_id_fkey"
            columns: ["responsible_dep_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_steps_responsible_user_id_fkey"
            columns: ["responsible_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      process_template: {
        Row: {
          created_at: string
          enable: boolean
          estimated_time_days: number | null
          id: string
          institution_id: string
          process_code: string | null
          process_name: string
          responsable_department_id: string
          responsable_user_id: string
          version: string | null
        }
        Insert: {
          created_at?: string
          enable: boolean
          estimated_time_days?: number | null
          id?: string
          institution_id: string
          process_code?: string | null
          process_name: string
          responsable_department_id: string
          responsable_user_id: string
          version?: string | null
        }
        Update: {
          created_at?: string
          enable?: boolean
          estimated_time_days?: number | null
          id?: string
          institution_id?: string
          process_code?: string | null
          process_name?: string
          responsable_department_id?: string
          responsable_user_id?: string
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "process_template_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institution"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "process_template_responsable_department_id_fkey"
            columns: ["responsable_department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "process_template_responsable_user_id_fkey"
            columns: ["responsable_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      process_transactions: {
        Row: {
          completed: boolean | null
          created_at: string
          current_responsable: string | null
          deadline: string | null
          detail: string | null
          end_date_real: string | null
          id: string
          process_id: string | null
          start_date: string | null
        }
        Insert: {
          completed?: boolean | null
          created_at?: string
          current_responsable?: string | null
          deadline?: string | null
          detail?: string | null
          end_date_real?: string | null
          id?: string
          process_id?: string | null
          start_date?: string | null
        }
        Update: {
          completed?: boolean | null
          created_at?: string
          current_responsable?: string | null
          deadline?: string | null
          detail?: string | null
          end_date_real?: string | null
          id?: string
          process_id?: string | null
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "process_transactions_current_responsable_fkey"
            columns: ["current_responsable"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "process_transactions_process_id_fkey"
            columns: ["process_id"]
            isOneToOne: false
            referencedRelation: "process_template"
            referencedColumns: ["id"]
          }
        ]
      }
      project: {
        Row: {
          activity_ended: boolean | null
          activity_progress: number | null
          activity_rescheduled: boolean | null
          advance_real_c1: number | null
          advance_real_c2: number | null
          advance_real_c3: number | null
          budget_estimated: number | null
          c1: number | null
          c2: number | null
          c3: number | null
          contract: string | null
          contract_asigned: boolean | null
          contract_father_id: string | null
          created_at: string
          current_contract: string | null
          current_period: string | null
          current_phase: string | null
          current_stage: string | null
          department: string | null
          estimated_award_date: string | null
          estimated_contract_singing_date: string | null
          estimated_date_publication_portal: string | null
          evaluation_phase: boolean | null
          execution_progress: number | null
          exp_notif_advance_real_c1: boolean | null
          exp_notif_advance_real_c2: boolean | null
          exp_notif_advance_real_c3: boolean | null
          exp_notif_current_contract: boolean | null
          exp_notif_real_award_date: boolean | null
          exp_notif_real_contract_signing_date: boolean | null
          exp_notif_real_date_publication_portal: boolean | null
          exp_notif_real_project_start_date: boolean | null
          exp_notif_real_relevance_response: boolean | null
          expiration_current_contract: string | null
          id: string
          indicator: string | null
          initial_period: string | null
          institution_id: string | null
          pac_progress: number | null
          pertinencia: boolean | null
          precontractual_progress: number | null
          preparatory_progress: number | null
          project_code: string | null
          project_name: string | null
          project_start_date: string | null
          projects_alerts: number | null
          real_award_date: string | null
          real_contract_signing_date: string | null
          real_date_publication_portal: string | null
          real_project_start_date: string | null
          real_relevance_response_date: string | null
          relevance: string | null
          relevance_response_date: string | null
          responsable: string | null
          short_name: string | null
          specific_requeriment: string | null
          support_c1: string | null
          support_c2: string | null
          support_c3: string | null
          total_paid_contract: number | null
          value_contract: number | null
        }
        Insert: {
          activity_ended?: boolean | null
          activity_progress?: number | null
          activity_rescheduled?: boolean | null
          advance_real_c1?: number | null
          advance_real_c2?: number | null
          advance_real_c3?: number | null
          budget_estimated?: number | null
          c1?: number | null
          c2?: number | null
          c3?: number | null
          contract?: string | null
          contract_asigned?: boolean | null
          contract_father_id?: string | null
          created_at?: string
          current_contract?: string | null
          current_period?: string | null
          current_phase?: string | null
          current_stage?: string | null
          department?: string | null
          estimated_award_date?: string | null
          estimated_contract_singing_date?: string | null
          estimated_date_publication_portal?: string | null
          evaluation_phase?: boolean | null
          execution_progress?: number | null
          exp_notif_advance_real_c1?: boolean | null
          exp_notif_advance_real_c2?: boolean | null
          exp_notif_advance_real_c3?: boolean | null
          exp_notif_current_contract?: boolean | null
          exp_notif_real_award_date?: boolean | null
          exp_notif_real_contract_signing_date?: boolean | null
          exp_notif_real_date_publication_portal?: boolean | null
          exp_notif_real_project_start_date?: boolean | null
          exp_notif_real_relevance_response?: boolean | null
          expiration_current_contract?: string | null
          id?: string
          indicator?: string | null
          initial_period?: string | null
          institution_id?: string | null
          pac_progress?: number | null
          pertinencia?: boolean | null
          precontractual_progress?: number | null
          preparatory_progress?: number | null
          project_code?: string | null
          project_name?: string | null
          project_start_date?: string | null
          projects_alerts?: number | null
          real_award_date?: string | null
          real_contract_signing_date?: string | null
          real_date_publication_portal?: string | null
          real_project_start_date?: string | null
          real_relevance_response_date?: string | null
          relevance?: string | null
          relevance_response_date?: string | null
          responsable?: string | null
          short_name?: string | null
          specific_requeriment?: string | null
          support_c1?: string | null
          support_c2?: string | null
          support_c3?: string | null
          total_paid_contract?: number | null
          value_contract?: number | null
        }
        Update: {
          activity_ended?: boolean | null
          activity_progress?: number | null
          activity_rescheduled?: boolean | null
          advance_real_c1?: number | null
          advance_real_c2?: number | null
          advance_real_c3?: number | null
          budget_estimated?: number | null
          c1?: number | null
          c2?: number | null
          c3?: number | null
          contract?: string | null
          contract_asigned?: boolean | null
          contract_father_id?: string | null
          created_at?: string
          current_contract?: string | null
          current_period?: string | null
          current_phase?: string | null
          current_stage?: string | null
          department?: string | null
          estimated_award_date?: string | null
          estimated_contract_singing_date?: string | null
          estimated_date_publication_portal?: string | null
          evaluation_phase?: boolean | null
          execution_progress?: number | null
          exp_notif_advance_real_c1?: boolean | null
          exp_notif_advance_real_c2?: boolean | null
          exp_notif_advance_real_c3?: boolean | null
          exp_notif_current_contract?: boolean | null
          exp_notif_real_award_date?: boolean | null
          exp_notif_real_contract_signing_date?: boolean | null
          exp_notif_real_date_publication_portal?: boolean | null
          exp_notif_real_project_start_date?: boolean | null
          exp_notif_real_relevance_response?: boolean | null
          expiration_current_contract?: string | null
          id?: string
          indicator?: string | null
          initial_period?: string | null
          institution_id?: string | null
          pac_progress?: number | null
          pertinencia?: boolean | null
          precontractual_progress?: number | null
          preparatory_progress?: number | null
          project_code?: string | null
          project_name?: string | null
          project_start_date?: string | null
          projects_alerts?: number | null
          real_award_date?: string | null
          real_contract_signing_date?: string | null
          real_date_publication_portal?: string | null
          real_project_start_date?: string | null
          real_relevance_response_date?: string | null
          relevance?: string | null
          relevance_response_date?: string | null
          responsable?: string | null
          short_name?: string | null
          specific_requeriment?: string | null
          support_c1?: string | null
          support_c2?: string | null
          support_c3?: string | null
          total_paid_contract?: number | null
          value_contract?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "poa_contract_fkey"
            columns: ["contract"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "poa_department_fkey"
            columns: ["department"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "poa_responsable_fkey"
            columns: ["responsable"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_poa_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institution"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_project_contract_father_id_fkey"
            columns: ["contract_father_id"]
            isOneToOne: false
            referencedRelation: "project_macro"
            referencedColumns: ["id"]
          }
        ]
      }
      project_budget_catalog: {
        Row: {
          budget_category_id: string | null
          code: string | null
          created_at: string
          id: string
          name: string | null
          year: number | null
        }
        Insert: {
          budget_category_id?: string | null
          code?: string | null
          created_at?: string
          id?: string
          name?: string | null
          year?: number | null
        }
        Update: {
          budget_category_id?: string | null
          code?: string | null
          created_at?: string
          id?: string
          name?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_project_budget_catalog_budget_category_id_fkey"
            columns: ["budget_category_id"]
            isOneToOne: false
            referencedRelation: "project_budget_category"
            referencedColumns: ["id"]
          }
        ]
      }
      project_budget_category: {
        Row: {
          created_at: string
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      project_budget_code: {
        Row: {
          annual_amount: number | null
          bid_funds: string | null
          budget_catalog_id: string | null
          budget_code_number: string | null
          budget_type: string | null
          created_at: string
          department: string | null
          detail_product: string | null
          electronic_catalog: string | null
          id: string
          product_type: string | null
          project_code: string | null
          project_code_number: string | null
          project_id: string | null
          purchase_type: string | null
          regime_type: string | null
          suggested_procedure: string | null
          term_c1_c2_c3: string | null
          total_budget_private: number | null
          total_budget_public: number | null
          total_certified_value_public: number | null
          total_executed_private: number | null
          total_executed_value_public: number | null
          unit: string | null
          unit_cost: number | null
        }
        Insert: {
          annual_amount?: number | null
          bid_funds?: string | null
          budget_catalog_id?: string | null
          budget_code_number?: string | null
          budget_type?: string | null
          created_at?: string
          department?: string | null
          detail_product?: string | null
          electronic_catalog?: string | null
          id?: string
          product_type?: string | null
          project_code?: string | null
          project_code_number?: string | null
          project_id?: string | null
          purchase_type?: string | null
          regime_type?: string | null
          suggested_procedure?: string | null
          term_c1_c2_c3?: string | null
          total_budget_private?: number | null
          total_budget_public?: number | null
          total_certified_value_public?: number | null
          total_executed_private?: number | null
          total_executed_value_public?: number | null
          unit?: string | null
          unit_cost?: number | null
        }
        Update: {
          annual_amount?: number | null
          bid_funds?: string | null
          budget_catalog_id?: string | null
          budget_code_number?: string | null
          budget_type?: string | null
          created_at?: string
          department?: string | null
          detail_product?: string | null
          electronic_catalog?: string | null
          id?: string
          product_type?: string | null
          project_code?: string | null
          project_code_number?: string | null
          project_id?: string | null
          purchase_type?: string | null
          regime_type?: string | null
          suggested_procedure?: string | null
          term_c1_c2_c3?: string | null
          total_budget_private?: number | null
          total_budget_public?: number | null
          total_certified_value_public?: number | null
          total_executed_private?: number | null
          total_executed_value_public?: number | null
          unit?: string | null
          unit_cost?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pac_department_fkey"
            columns: ["department"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_pac_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_project_budget_code_budget_catalog_id_fkey"
            columns: ["budget_catalog_id"]
            isOneToOne: false
            referencedRelation: "project_budget_catalog"
            referencedColumns: ["id"]
          }
        ]
      }
      project_budget_code_by_year: {
        Row: {
          created_at: string
          id: string
          pac_id: string | null
          value: number | null
          year: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          pac_id?: string | null
          value?: number | null
          year?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          pac_id?: string | null
          value?: number | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_pac_by_year_pac_id_fkey"
            columns: ["pac_id"]
            isOneToOne: false
            referencedRelation: "project_budget_code"
            referencedColumns: ["id"]
          }
        ]
      }
      project_by_month: {
        Row: {
          activities_ended: number | null
          activities_planned: number | null
          created_at: string
          id: string
          institution_id: string | null
          month: string | null
          projects_awarded: number | null
          projects_planned: number | null
          projects_started: number | null
          total_projects_activities: number | null
        }
        Insert: {
          activities_ended?: number | null
          activities_planned?: number | null
          created_at?: string
          id?: string
          institution_id?: string | null
          month?: string | null
          projects_awarded?: number | null
          projects_planned?: number | null
          projects_started?: number | null
          total_projects_activities?: number | null
        }
        Update: {
          activities_ended?: number | null
          activities_planned?: number | null
          created_at?: string
          id?: string
          institution_id?: string | null
          month?: string | null
          projects_awarded?: number | null
          projects_planned?: number | null
          projects_started?: number | null
          total_projects_activities?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "poa_by_month_institution_ref_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institution"
            referencedColumns: ["id"]
          }
        ]
      }
      project_macro: {
        Row: {
          budget_delete: number | null
          budget_executed_delete: number | null
          code: string | null
          created_at: string
          department_id: string | null
          id: string
          name: string | null
          projects_number_delete: number | null
          responsable_user: string | null
          status: string | null
        }
        Insert: {
          budget_delete?: number | null
          budget_executed_delete?: number | null
          code?: string | null
          created_at?: string
          department_id?: string | null
          id?: string
          name?: string | null
          projects_number_delete?: number | null
          responsable_user?: string | null
          status?: string | null
        }
        Update: {
          budget_delete?: number | null
          budget_executed_delete?: number | null
          code?: string | null
          created_at?: string
          department_id?: string | null
          id?: string
          name?: string | null
          projects_number_delete?: number | null
          responsable_user?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_proyect_macro_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          }
        ]
      }
      project_modificacion: {
        Row: {
          comments: string | null
          created_at: string
          date: string | null
          date_register: string | null
          file: string | null
          id: string
          tipo: string | null
          user_register: string | null
        }
        Insert: {
          comments?: string | null
          created_at?: string
          date?: string | null
          date_register?: string | null
          file?: string | null
          id?: string
          tipo?: string | null
          user_register?: string | null
        }
        Update: {
          comments?: string | null
          created_at?: string
          date?: string | null
          date_register?: string | null
          file?: string | null
          id?: string
          tipo?: string | null
          user_register?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "modificacion_poa_user_register_fkey"
            columns: ["user_register"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      project_phases_budget: {
        Row: {
          created_at: string
          id: string
          order: number | null
          pac_progress: number | null
          phase: string | null
          stage: string | null
          total_percentage: number | null
          weight_percentage: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          order?: number | null
          pac_progress?: number | null
          phase?: string | null
          stage?: string | null
          total_percentage?: number | null
          weight_percentage?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          order?: number | null
          pac_progress?: number | null
          phase?: string | null
          stage?: string | null
          total_percentage?: number | null
          weight_percentage?: number | null
        }
        Relationships: []
      }
      project_private_macroproject: {
        Row: {
          code: string | null
          created_at: string
          id: string
          name: string | null
          responsable_user_id: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string
          id?: string
          name?: string | null
          responsable_user_id?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string
          id?: string
          name?: string | null
          responsable_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_project_private_macroproject_responsable_user_id_fkey"
            columns: ["responsable_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      project_private_phases: {
        Row: {
          code: string | null
          created_at: string
          id: string
          macroproject_id: string | null
          name: string | null
          project_id: string | null
          responsable_user_id: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string
          id?: string
          macroproject_id?: string | null
          name?: string | null
          project_id?: string | null
          responsable_user_id?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string
          id?: string
          macroproject_id?: string | null
          name?: string | null
          project_id?: string | null
          responsable_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_project_private_phases_macroproject_id_fkey"
            columns: ["macroproject_id"]
            isOneToOne: false
            referencedRelation: "project_private_macroproject"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_project_private_phases_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "project_private_project"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_project_private_phases_responsable_user_id_fkey"
            columns: ["responsable_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      project_private_project: {
        Row: {
          code: string | null
          created_at: string
          id: string
          macroproject_id: string | null
          name: string | null
          responsable_user_id: string | null
          status: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string
          id?: string
          macroproject_id?: string | null
          name?: string | null
          responsable_user_id?: string | null
          status?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string
          id?: string
          macroproject_id?: string | null
          name?: string | null
          responsable_user_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_project_private_project_macroproject_id_fkey"
            columns: ["macroproject_id"]
            isOneToOne: false
            referencedRelation: "project_private_macroproject"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_project_private_project_responsable_user_id_fkey"
            columns: ["responsable_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      project_progress_log: {
        Row: {
          comment: string | null
          created_at: string
          created_by: string | null
          date: string | null
          estimated_date_completion: string | null
          id: string
          phase: string | null
          progress_pac_percentage: number | null
          progress_phase_percentage: number | null
          progress_total_percentage: number | null
          project_code: string | null
          project_id: string | null
          registration_date: string | null
          stage: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          created_by?: string | null
          date?: string | null
          estimated_date_completion?: string | null
          id?: string
          phase?: string | null
          progress_pac_percentage?: number | null
          progress_phase_percentage?: number | null
          progress_total_percentage?: number | null
          project_code?: string | null
          project_id?: string | null
          registration_date?: string | null
          stage?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          created_by?: string | null
          date?: string | null
          estimated_date_completion?: string | null
          id?: string
          phase?: string | null
          progress_pac_percentage?: number | null
          progress_phase_percentage?: number | null
          progress_total_percentage?: number | null
          project_code?: string | null
          project_id?: string | null
          registration_date?: string | null
          stage?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "progress_log_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_progress_log_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          }
        ]
      }
      project_progress_log_comments: {
        Row: {
          comment: string | null
          created_at: string
          date: string | null
          id: string
          name: string | null
          progress_log_id: string | null
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          date?: string | null
          id?: string
          name?: string | null
          progress_log_id?: string | null
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          date?: string | null
          id?: string
          name?: string | null
          progress_log_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_progress_log_progress_log_ref_fkey"
            columns: ["progress_log_id"]
            isOneToOne: false
            referencedRelation: "project_progress_log"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_progress_log_user_ref_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      project_progress_log_without_budget: {
        Row: {
          comment: string | null
          created_at: string
          created_by: string | null
          execution_date: string | null
          four_month_period: string | null
          id: string
          progress_percentage: number | null
          project_code: string | null
          project_id: string | null
          registration_date: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          created_by?: string | null
          execution_date?: string | null
          four_month_period?: string | null
          id?: string
          progress_percentage?: number | null
          project_code?: string | null
          project_id?: string | null
          registration_date?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          created_by?: string | null
          execution_date?: string | null
          four_month_period?: string | null
          id?: string
          progress_percentage?: number | null
          project_code?: string | null
          project_id?: string | null
          registration_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "progress_log_without_budget_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_progress_log_without_budget_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          }
        ]
      }
      project_update_activities_logs: {
        Row: {
          c1_plan_nuevo: number | null
          c1_plan_original: number | null
          c2_plan_nuevo: number | null
          c2_plan_original: number | null
          c3_plan_nuevo: number | null
          c3_plan_original: number | null
          comentarios: string | null
          created_at: string
          fecha_cambio: string | null
          id: number
          project_id: string | null
          user_cambio: string | null
        }
        Insert: {
          c1_plan_nuevo?: number | null
          c1_plan_original?: number | null
          c2_plan_nuevo?: number | null
          c2_plan_original?: number | null
          c3_plan_nuevo?: number | null
          c3_plan_original?: number | null
          comentarios?: string | null
          created_at?: string
          fecha_cambio?: string | null
          id?: number
          project_id?: string | null
          user_cambio?: string | null
        }
        Update: {
          c1_plan_nuevo?: number | null
          c1_plan_original?: number | null
          c2_plan_nuevo?: number | null
          c2_plan_original?: number | null
          c3_plan_nuevo?: number | null
          c3_plan_original?: number | null
          comentarios?: string | null
          created_at?: string
          fecha_cambio?: string | null
          id?: number
          project_id?: string | null
          user_cambio?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_poa_update_activities_logs_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_poa_update_activities_logs_user_cambio_fkey"
            columns: ["user_cambio"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      project_update_logs: {
        Row: {
          comentarios: string | null
          created_at: string
          cuatrimestre_original: string | null
          fecha_adjudicacion_original: string | null
          fecha_cambio: string | null
          id: string
          monto_original: number | null
          nueva_fecha_adjudicacion: string | null
          nuevo_cuatrimestre: string | null
          nuevo_monto: number | null
          project_id: string | null
          user_cambio: string | null
        }
        Insert: {
          comentarios?: string | null
          created_at?: string
          cuatrimestre_original?: string | null
          fecha_adjudicacion_original?: string | null
          fecha_cambio?: string | null
          id?: string
          monto_original?: number | null
          nueva_fecha_adjudicacion?: string | null
          nuevo_cuatrimestre?: string | null
          nuevo_monto?: number | null
          project_id?: string | null
          user_cambio?: string | null
        }
        Update: {
          comentarios?: string | null
          created_at?: string
          cuatrimestre_original?: string | null
          fecha_adjudicacion_original?: string | null
          fecha_cambio?: string | null
          id?: string
          monto_original?: number | null
          nueva_fecha_adjudicacion?: string | null
          nuevo_cuatrimestre?: string | null
          nuevo_monto?: number | null
          project_id?: string | null
          user_cambio?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_poa_update_logs_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_poa_update_logs_user_cambio_fkey"
            columns: ["user_cambio"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      recommendations: {
        Row: {
          accomplishment_date: string | null
          answered: boolean | null
          created_at: string
          department: string | null
          entity: string | null
          finalized: boolean | null
          id: string
          priority: string | null
          reception_date: string | null
          required_action: string | null
          support_file: string | null
        }
        Insert: {
          accomplishment_date?: string | null
          answered?: boolean | null
          created_at?: string
          department?: string | null
          entity?: string | null
          finalized?: boolean | null
          id?: string
          priority?: string | null
          reception_date?: string | null
          required_action?: string | null
          support_file?: string | null
        }
        Update: {
          accomplishment_date?: string | null
          answered?: boolean | null
          created_at?: string
          department?: string | null
          entity?: string | null
          finalized?: boolean | null
          id?: string
          priority?: string | null
          reception_date?: string | null
          required_action?: string | null
          support_file?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recommendations_department_fkey"
            columns: ["department"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          }
        ]
      }
      recommendations_actions: {
        Row: {
          action_date: string | null
          action_done: string | null
          created_at: string
          id: string
          recommendations_id: string | null
        }
        Insert: {
          action_date?: string | null
          action_done?: string | null
          created_at?: string
          id?: string
          recommendations_id?: string | null
        }
        Update: {
          action_date?: string | null
          action_done?: string | null
          created_at?: string
          id?: string
          recommendations_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "actions_to_recommendations_recommendations_ref_fkey"
            columns: ["recommendations_id"]
            isOneToOne: false
            referencedRelation: "recommendations"
            referencedColumns: ["id"]
          }
        ]
      }
      support_file_deliveries: {
        Row: {
          created_at: string
          date: string | null
          delivery_id: string | null
          file_name: string | null
          id: string
          support_file: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          delivery_id?: string | null
          file_name?: string | null
          id?: string
          support_file?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          delivery_id?: string | null
          file_name?: string | null
          id?: string
          support_file?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_support_file_deliveries_delivery_id_fkey"
            columns: ["delivery_id"]
            isOneToOne: false
            referencedRelation: "contracts_deliveries"
            referencedColumns: ["id"]
          }
        ]
      }
      support_file_poa: {
        Row: {
          created_at: string
          file_name: string | null
          file_type: string | null
          file_url: string | null
          id: string
          progress_log_id: string | null
          progress_log_without_budget_id: string | null
        }
        Insert: {
          created_at?: string
          file_name?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          progress_log_id?: string | null
          progress_log_without_budget_id?: string | null
        }
        Update: {
          created_at?: string
          file_name?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          progress_log_id?: string | null
          progress_log_without_budget_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_support_file_poa_progress_log_id_fkey"
            columns: ["progress_log_id"]
            isOneToOne: false
            referencedRelation: "project_progress_log"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_support_file_poa_progress_log_without_budget_id_fkey"
            columns: ["progress_log_without_budget_id"]
            isOneToOne: false
            referencedRelation: "project_progress_log_without_budget"
            referencedColumns: ["id"]
          }
        ]
      }
      support_file_recommendations_actions: {
        Row: {
          actions_to_recomendations: string | null
          created_at: string
          file_name: string | null
          file_type: string | null
          file_url: string | null
          id: string
        }
        Insert: {
          actions_to_recomendations?: string | null
          created_at?: string
          file_name?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
        }
        Update: {
          actions_to_recomendations?: string | null
          created_at?: string
          file_name?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_support_file_documents_actions_to_recomendations_fkey"
            columns: ["actions_to_recomendations"]
            isOneToOne: false
            referencedRelation: "recommendations_actions"
            referencedColumns: ["id"]
          }
        ]
      }
      tasks: {
        Row: {
          actual_completion_date: string | null
          assignees: string[] | null
          created_at: string
          created_date: string | null
          creator: string | null
          description: string | null
          estimated_completion_date: string | null
          "expire_notification_`": boolean | null
          finished: boolean | null
          id: string
          priority: string | null
          project_id: string | null
          status: string | null
          task_type: string | null
          title: string | null
        }
        Insert: {
          actual_completion_date?: string | null
          assignees?: string[] | null
          created_at?: string
          created_date?: string | null
          creator?: string | null
          description?: string | null
          estimated_completion_date?: string | null
          "expire_notification_`"?: boolean | null
          finished?: boolean | null
          id?: string
          priority?: string | null
          project_id?: string | null
          status?: string | null
          task_type?: string | null
          title?: string | null
        }
        Update: {
          actual_completion_date?: string | null
          assignees?: string[] | null
          created_at?: string
          created_date?: string | null
          creator?: string | null
          description?: string | null
          estimated_completion_date?: string | null
          "expire_notification_`"?: boolean | null
          finished?: boolean | null
          id?: string
          priority?: string | null
          project_id?: string | null
          status?: string | null
          task_type?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_creator_fkey"
            columns: ["creator"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          }
        ]
      }
      tasks_comment: {
        Row: {
          comment: string | null
          comment_date: string | null
          comment_user: string | null
          created_at: string
          id: string
          task_id: string | null
        }
        Insert: {
          comment?: string | null
          comment_date?: string | null
          comment_user?: string | null
          created_at?: string
          id?: string
          task_id?: string | null
        }
        Update: {
          comment?: string | null
          comment_date?: string | null
          comment_user?: string | null
          created_at?: string
          id?: string
          task_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_task_comment_comment_user_fkey"
            columns: ["comment_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "public_task_comment_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          }
        ]
      }
      tasks_control_task: {
        Row: {
          created_at: string
          id: string
          responsible: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          responsible?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          responsible?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "control_task_responsible_fkey"
            columns: ["responsible"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tasks_status_changes: {
        Row: {
          created_at: string
          date_updated: string | null
          id: number
          status: string | null
          task_id: string | null
        }
        Insert: {
          created_at?: string
          date_updated?: string | null
          id?: number
          status?: string | null
          task_id?: string | null
        }
        Update: {
          created_at?: string
          date_updated?: string | null
          id?: number
          status?: string | null
          task_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_tasks_status_changes_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          }
        ]
      }
      tasks_subtasks: {
        Row: {
          created_at: string
          creation_date: string | null
          deadline: string | null
          description: string | null
          finished: boolean | null
          id: string
          task_id: string | null
          title: string | null
          user_register: string | null
          user_responsible: string | null
        }
        Insert: {
          created_at?: string
          creation_date?: string | null
          deadline?: string | null
          description?: string | null
          finished?: boolean | null
          id?: string
          task_id?: string | null
          title?: string | null
          user_register?: string | null
          user_responsible?: string | null
        }
        Update: {
          created_at?: string
          creation_date?: string | null
          deadline?: string | null
          description?: string | null
          finished?: boolean | null
          id?: string
          task_id?: string | null
          title?: string | null
          user_register?: string | null
          user_responsible?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_subtasks_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_subtasks_user_register_fkey"
            columns: ["user_register"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "public_subtasks_user_responsible_fkey"
            columns: ["user_responsible"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      users: {
        Row: {
          created_by: string | null
          created_time: string
          department_id: string | null
          display_name: string | null
          email: string
          first_login: boolean | null
          firstname: string | null
          id: string
          institution_id: string | null
          job_position: string | null
          lastname: string | null
          phone_number: string | null
          photo_url: string | null
          rol_id: string | null
          seleccion_temp: boolean | null
          state: boolean
          uid: string | null
        }
        Insert: {
          created_by?: string | null
          created_time?: string
          department_id?: string | null
          display_name?: string | null
          email?: string
          first_login?: boolean | null
          firstname?: string | null
          id: string
          institution_id?: string | null
          job_position?: string | null
          lastname?: string | null
          phone_number?: string | null
          photo_url?: string | null
          rol_id?: string | null
          seleccion_temp?: boolean | null
          state?: boolean
          uid?: string | null
        }
        Update: {
          created_by?: string | null
          created_time?: string
          department_id?: string | null
          display_name?: string | null
          email?: string
          first_login?: boolean | null
          firstname?: string | null
          id?: string
          institution_id?: string | null
          job_position?: string | null
          lastname?: string | null
          phone_number?: string | null
          photo_url?: string | null
          rol_id?: string | null
          seleccion_temp?: boolean | null
          state?: boolean
          uid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institution"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_rol_id_fkey"
            columns: ["rol_id"]
            isOneToOne: false
            referencedRelation: "users_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_uid_fkey"
            columns: ["uid"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users_permisos: {
        Row: {
          created_at: string
          edicion: boolean | null
          eliminacion: boolean | null
          escritura: boolean | null
          id: string
          lectura: boolean | null
          permiso: string | null
          rol_id: string | null
        }
        Insert: {
          created_at?: string
          edicion?: boolean | null
          eliminacion?: boolean | null
          escritura?: boolean | null
          id?: string
          lectura?: boolean | null
          permiso?: string | null
          rol_id?: string | null
        }
        Update: {
          created_at?: string
          edicion?: boolean | null
          eliminacion?: boolean | null
          escritura?: boolean | null
          id?: string
          lectura?: boolean | null
          permiso?: string | null
          rol_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_permisos_rol_id_fkey"
            columns: ["rol_id"]
            isOneToOne: false
            referencedRelation: "users_roles"
            referencedColumns: ["id"]
          }
        ]
      }
      users_roles: {
        Row: {
          created_at: string
          id: string
          institution_id: string | null
          nombre: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          institution_id?: string | null
          nombre?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          institution_id?: string | null
          nombre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_roles_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institution"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      contract_search: {
        Args: {
          termino: string
        }
        Returns: {
          administrator_id: string | null
          advance_exist: string | null
          advance_file: string | null
          advance_percentage: number | null
          advance_value: number | null
          budget_id: string | null
          complete_register: boolean | null
          contract_end_date: string | null
          contract_ended: boolean | null
          contract_file: string | null
          contract_id: string | null
          contract_nature: string | null
          contract_number: string | null
          contract_object: string | null
          contract_start_date: string | null
          contract_subscription_date: string | null
          contract_type: string | null
          contract_value: number | null
          contractor_id: string | null
          created_at: string
          date_register: string | null
          department_id: string | null
          expire_notification_1: boolean | null
          expire_notification_2: boolean | null
          extensions: string | null
          full_value: number | null
          id: string
          institution_id: string | null
          link_process: string | null
          notif_end_contract_1: boolean | null
          notif_end_contract_2: boolean | null
          notif_end_contract_3: boolean | null
          notif_end_contract_date_1: string | null
          notif_end_contract_date_2: string | null
          notif_end_contract_date_3: string | null
          notification_date: string | null
          other_delivery_period: string | null
          other_start_date: string | null
          pay_on_delivery: string | null
          payment_mode: string | null
          payment_real_value_ratio: number | null
          penalty: string | null
          planned_execution_budget_current_year: number | null
          planned_execution_budget_total: number | null
          private_project_id: string | null
          progress_budget_estimated: number | null
          progress_budget_real: number | null
          progress_payments: number | null
          progress_term: number | null
          project_id: string | null
          quit_advance: string | null
          real_execution_budget_total: number | null
          recurrent: boolean | null
          replan_contract_end_date: string | null
          retention_deadline: number | null
          retention_devolution_date: string | null
          retention_exists: boolean | null
          retention_type: string | null
          retention_value: number | null
          sercop_process_code: string | null
          start_condition: string | null
          status: string | null
          term: number | null
          update_generated: number | null
          user_register: string | null
        }[]
      }
      contractor_search: {
        Args: {
          termino: string
        }
        Returns: {
          address: string | null
          city: string | null
          created_at: string
          date_register: string | null
          deleted: boolean | null
          email: string | null
          fts: unknown | null
          government_id: string | null
          id: string
          institution_id: string | null
          legal_representative: string | null
          legal_representative_position: string | null
          name: string | null
          phone: string | null
          rup: string | null
          state: string | null
          type: string | null
          user_register: string | null
        }[]
      }
      get_current_year: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      get_payment_real_value_ratio: {
        Args: {
          contract_id: string
        }
        Returns: number
      }
      get_planned_execution_budget_current_year: {
        Args: {
          contract_id: string
          year: number
        }
        Returns: number
      }
      get_planned_execution_budget_total: {
        Args: {
          contract_id: string
        }
        Returns: number
      }
      get_real_execution_budget_total: {
        Args: {
          contract_id: string
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
