import Link from "next/link";
import contacts from "../api/contacts";

export default function Contacts(){
    return(<>
        <h1>Contacts</h1>
        <Link href="/">
        <h2>Home</h2>
        </Link>
        <ul>
            {contacts.map((contact) => (
                <Link href={`/contacts/${contact.id}`}>
                <li key={contact.id}>{contact.name}</li>
                </Link>
            ))}
        </ul>
    </>
    )
}