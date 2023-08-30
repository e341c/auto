import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-dark shadow" style={{position: "fixed", top: "0" , left: "0", right: "0"}}>
            <div className="container p-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Link href={"#"} className="text-decoration-none">
                        <h4 className="text-dark gold-text">
                            Gold Auto Service
                        </h4>
                    </Link>
                </div>
                <div className="d-flex align-items-center">
                    <div className="me-3">
                        <Link href={"https://api.whatsapp.com/send?phone=77070178901"} className="btn btn-outline-warning m-0">
                            <strong>WhatsApp</strong>
                        </Link>
                    </div>
                    <div>
                        <Link href={"tel:+77070178901"} className="btn btn-gold m-0">
                            <strong>Заказать услугу</strong>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
