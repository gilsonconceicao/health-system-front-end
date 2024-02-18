import { PatientsFull } from "../Patients/patients.type"

export type AppointmentsFull = {
    id: string
    reason: string
    feedbackPatient: any
    status: number
    statusDisplay: string
    isCanceled: boolean
    appointmentDate: string
    appointmentDateDisplay: any
    patientId: string
    patient: PatientsFull
}

export type payloadCreateAppointment = {
    reason: string
    appointmentDate: string
}
export type appointmentsCreate = {
    reason: string
    appointmentDate: string
    patientId: string
}

export type OptionsTypeSteps = "Completed" | "Cancel" | "ConfirmParticipation"