export type StatusType = 'idle' | 'loading' | 'success' | 'failed'

export type PostType={
    userId: number
    id: number
    title: string
    body: string
}
export type CommentsType={
    postId: number
    id: number
    name: string
    email:string
    body: string
}
export type UsersType={
    id: number
    name: string
    username:string
    email:string
    address: AddressType
    phone: string
    website: string
    company:CompanyType
}
type CompanyType={
    name: string
    catchPhrase: string
    bs: string
}
type AddressType={
    street: string
    suite: string
    city: string
    zipcode: string
    geo:{
        lat: string
        lng: string
    }
}
