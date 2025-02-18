import Mock from 'mockjs'

const MockDataDisplay = () => {
    return {
        data: [
            {
                id: 1,
                name: "Alice Johnson",
                age: 28,
                email: "alice.johnson@example.com",
                status: "Active"
            },
            {
                id: 2,
                name: "Bob Smith",
                age: 34,
                email: "bob.smith@example.com",
                status: "Inactive"
            },
            {
                id: 3,
                name: "Charlie Brown",
                age: 25,
                email: "charlie.brown@example.com",
                status: "Active"
            },
            {
                id: 4,
                name: "David Wilson",
                age: 40,
                email: "david.wilson@example.com",
                status: "Pending"
            },
            {
                id: 5,
                name: "Emma Davis",
                age: 30,
                email: "emma.davis@example.com",
                status: "Active"
            }
        ]
    }
}


export default MockDataDisplay;
