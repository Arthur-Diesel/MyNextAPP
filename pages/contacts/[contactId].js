import { useRouter } from "next/router";
import contacts from "../api/contacts";

export default function Contact(){
    const router = useRouter();
    const { contactId } = router.query;
    const contact = contacts.find((contact) => contact.id == contactId);
    const firstName = contact && contact.name ? contact.name.split(" ")[0] : "No first name available...";
    const otherNames = contact && contact.name ? contact.name.split(" ").slice(1).join(" ") : "No other names available...";
    return (
        <>
        <h1>
            {firstName}
        </h1>
        <h2>
            {otherNames}
        </h2>
        <p>
            {contact ? contact.email : "No email available..."}
        </p>
        <p>
            {contact ? contact.phone : "No phone available..."}
        </p>
        <br />
        <button onClick={() => router.back()}>Go back!</button>
        </>
    )
}