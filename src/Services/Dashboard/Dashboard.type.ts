export type DashboardType = {
   feedbackPatients: FeedbackType[]
   totalPatients: number
   totalsAppointments: number
   totalsAppointmentsCancelled: number
   totalsAppointmentsConfirmed: number
}

export type FeedbackType = { 
   feedback: string; 
   appointmentId: string;  
   name: string; 
   createdAt: Date | string
}