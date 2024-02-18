
export interface PatientsFull {
    id: string
    createdAt: string
    name: string
    lastName: string
    gender: string
    email: string
    phoneNumber: string
    smoker: boolean
    regularExercise: boolean
    birthDate: string
    address: Address
    appointments: any[]
}

export interface Address {
    id: string
    street: string
    state: string
    zipCode: string
    city: string
    number: string
    patientId: string
}
