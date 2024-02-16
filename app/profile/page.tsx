import Image from "next/image";
import { Avatar, Paper, Text } from "@mantine/core";
import { useState } from "react";

type User = {
    userName: string,
    age: number,
    country: string,
    gender: "Male" | "Female" | "Other"
    profession: "Student" | "Professional"
    contact: {
        phone: string,
        email: string,
    }
}

export default async function Page() {
    const user = await fetch("http://localhost:3001/user").then(response => response.json());
    console.log(user)
    
    return (<div>
        <Paper shadow="md" p="xl" className="w-80">
            <div className="w-full flex justify-center items-center flex-col">
                <div className="w-full flex justify-center items-center flex-col">
                    <Avatar m="md" size="xl" src={user.gender==="Male" ? "male.png" : "female-user.png"} alt="male avatar"/>
                    <Text size="lg" fw={500} c="blue">{user.userName + " | " + user.age}</Text>
                    <Text size="sm" c="blue">{user.profession}</Text>
                </div>
                

                {/* Contact details */}
                <div className="mt-6 flex justify-start flex-col w-full">
                    <Text fw={500} size="md">Contact Information</Text>
                    {Object.keys(user.contact).map((contactMethod, i)=> {
                        return <Text key={i} size="sm" c="dimmed"> <link rel="icon" href="./icons8-email-16.png" sizes="any" />{user.contact[contactMethod]}</Text>
                    })}
                </div>

                <div className="mt-6 flex justify-start flex-col w-full">
                    <Text fw={500} size="md">Contact Information</Text>
                    {Object.keys(user.contact).map((contactMethod, i)=> {
                        return <Text key={i} size="sm" c="dimmed"> <link rel="icon" href="./icons8-email-16.png" sizes="any" />{user.contact[contactMethod]}</Text>
                    })}
                </div>
            </div>
            
        </Paper>

    </div>)

    return (<p>Hello</p>)
}   