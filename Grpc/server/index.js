const PROTO_PATH = "./customers.proto";
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packDef = protoLoader.loadSync(PROTO_PATH, {keepCase:true,longs:String,enums:String,arrays:true});

const custProto = grpc.loadPackageDefinition(packDef);

const server = new grpc.Server();

const customers = [
    {
        id:"1",
        name:"sbc",
        age:23,
        address:"testing address 1"
    },
    {
        id:"2",
        name:"knbgj",
        age:23,
        address:"testing addr 2"
    },
    {
        id:"3",
        name:"sasa",
        age:23,
        address:"testing address 3"
    },
]

server.addService(custProto.CustomerService.service, {
    getAll:(call, cb)=> {
        cb(null, {customers})
    },
    get:(call, cb)=> {
        let customer = customers.find(n => n.id === call.request.id)

        if(customer){
            cb(null, customer)
        }else{
            cb({
                code:grpc.status.NOT_FOUND,
                details:"Not Found"
            })
        }
    },
    insert:(call, cb)=> {
        let customer = call.request.customer;

        customer.id = `${customers.length + 1}`;
        customers.push(customer);
        cb(null, customer);
    },
    update:(call, cb)=> {
        let existingCustomer = customers.find(n=> n.id===call.request.id)

        if(existingCustomer){
            existingCustomer.name= call.request.name;
            existingCustomer.age= call.request.age;
            existingCustomer.address= call.request.address;
            cb(null, existingCustomer)
        } else {
            cb(
                {
                    code:grpc.status.NOT_FOUND,
                    details:"Not Found"
                }
            )
        }
    },
    remove:(call, cb)=> {
        let existingCustomerIndex = customers.findIndex(n=> n.id===call.request.id)

        if(existingCustomerIndex != -1){
            customers.splice(existingCustomerIndex, 1);
            cb(call,{});
        }else {
            cb({
                code:grpc.status.NOT_FOUND,
                details:"Not Found"
            })
        }
    }
})


server.bindAsync("127.0.0.1:30034", grpc.ServerCredentials.createInsecure(), (err, port)=>{
    if(err){
        console.log("Error: " , err);
    }else{
        // server.start()
        console.log(`Started ${port}`);
    }
})
