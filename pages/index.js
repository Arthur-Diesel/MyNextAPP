import { Menu } from "@/components/menu"
import styles from "../styles/Home.module.css"
import Image from "next/image";

export default function Home(){
    return (
        <>
        <h1 className={styles.welcomeText}>
            Hello World!
        </h1>
        <Image src="https://images.unsplash.com/photo-1722778610349-e3c02e277ec2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem gerada por computador de um objeto circular." width={394} height={263}/>
        <div>
            <form onSubmit={(e) => { e.preventDefault(); 
                const query = e.target[0].value;
                window.location.href = `/news/search/${query}`;
             }}>
                <style jsx>{`
                    .search {
                        margin: 8px;
                        padding: 8px;
                    }
                `}</style>
                <input type="text" className="search" placeholder="Search..." />
                <style jsx>{`
                    .btn {
                        background-color: #4CAF50;
                        color: white;
                        padding: 8px;
                        margin: 8px;
                        border: none;
                        cursor: pointer;
                    }
                `}</style>
                <button type="submit" className="btn">Search</button>
            </form>
        </div>
        <Menu />   
        </>
    )
}