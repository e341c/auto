import Link from "next/link";

export default function Services() {
    return (
        <div className="pb-5">
            <div className="container">
                <h3 className="mb-4 text-center">Наши услуги</h3>
                <div className="mb-5">
                    <div className="p-3 mb-3 shadow" style={{border: "0", borderRadius: "20px", background: "rgba(255,255,255,0.1"}}>
                        <p className="text-light m-0">Прикурить авто 3000 тнг</p>
                    </div>
                    <div className="p-3 mb-3 shadow" style={{border: "0", borderRadius: "20px", background: "rgba(255,255,255,0.1"}}>
                        <p className="text-light m-0">Подкачка колес 4000 тнг</p>
                    </div>
                    <div className="p-3 mb-3 shadow" style={{border: "0", borderRadius: "20px", background: "rgba(255,255,255,0.1"}}>
                        <p className="text-light m-0">Доставка топлива 4000 тнг</p>
                    </div>
                    <div className="p-3 mb-3 shadow" style={{border: "0", borderRadius: "20px", background: "rgba(255,255,255,0.1"}}>
                        <p className="text-light m-0">Трезвый водитель от 5000 тнг</p>
                    </div>
                </div>
                <div className="mb-5">
                    <Link href={"tel:+77070178901"} className="btn btn-gold m-0 w-100">
                        <strong>Позвонить</strong>
                    </Link>
                </div>
            </div>
        </div>
    );
}
