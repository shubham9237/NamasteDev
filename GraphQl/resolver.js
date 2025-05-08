const data = {
    authors:[
        {id:1, name:"Shubham", bookIds:[1,2]},
        {id:2, name:"Shubha", bookIds:[1,3]},
        {id:3, name:"Shubh", bookIds:[2,3]},
    ],
    books:[
        {id:1, title:"Ipad purchase", publishedYear:2024, authorId:1},
        {id:2, title:"Iphone purchase", publishedYear:2024, authorId:2},
        {id:3, title:"Laptop purchase", publishedYear:2024, authorId:3},
    ]
}

export const resolvers = {
    Book:{
        author:(parent,args,context,info)=>{
            return data.authors.find(authorDetail => authorDetail.id===parent.authorId)
        }
    },
    Author:{
        books:(parent,args,context,info)=>{
            return data.books.filter(bookDetail => parent.bookIds.includes(bookDetail.id))
        }
    },
    Query: {
        authors:()=>{
            return data.authors
        },
        books:()=>{
            return data.books
        }
    },
    Mutation:{
        addBook:(parent,args,context,info) => {
            const newBook ={...args,id:data.books.length+1}
            data.books.push(newBook)
            return newBook
        }
    }
} 