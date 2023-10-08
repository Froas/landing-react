import "./assets/Diplom.css"
import { useEffect } from "react";
export const Diplom = () => {
    useEffect(() => {
        document.title = "MIRZAYEV AMIRBEK diplom ma'lumoti";
    }, []);
    return (
        <div className="MainContainer">
            <div className="Container">
                <div className="FirstContainer">
                    <div className="Title">
                        BITIRUVCHINING SHAXSIY MA'LUMOTLARI
                    </div>
                    <div className="Table">
                        <div className="Colum">
                            <div className="ColumnRowFirsrtBold">Familiya:</div>
                            <div className="ColumnRowFirsrt">MIRZAYEV</div>
                        </div>
                        <div className="Colum">
                            <div className="ColumnRowSecondBold">Ismi:</div>
                            <div className="ColumnRowSecond">AMIRBEK</div>
                        </div>
                        <div className="Colum">
                            <div className="ColumnRowFirsrtBold">Pasport raqami:</div>
                            <div className="ColumnRowFirsrt">AB7580677</div>

                        </div>
                        <div className="Colum">
                            <div className="ColumnRowSecondBold">Tug'ilgan sana:</div>
                            <div className="ColumnRowSecond">06.08.2001</div>
                        </div>
                    </div>
                </div>
                <div className="SecondContainer">
                    <div className="Title">
                        BITIRUVCHINING TA'LIM MA'LUMOTLARI
                    </div>
                    <div className="Table">
                        <div className="Colum">
                            <div className="ColumnRowFirsrtBold">OTM:</div>
                            <div className="ColumnRowFirsrt">"Ipak yo'li" turizm va madaniy meros xalqaro universiteti</div>
                        </div>
                        <div className="Colum">
                            <div className="ColumnRowSecondBold">Mutaxassislik:</div>
                            <div className="ColumnRowSecond">Turizm faoliyatida logistika</div>

                        </div>
                        <div className="Colum">
                            <div className="ColumnRowFirsrtBold">Ta'lim turi:</div>
                            <div className="ColumnRowFirsrt">Bakalavr</div>
                        </div>
                        <div className="Colum">
                            <div className="ColumnRowSecondBold">Ta'lim shakli:</div>
                            <div className="ColumnRowSecond">Kunduzgi</div>
                        </div>
                        <div className="Colum">
                            <div className="ColumnRowFirsrtBold">Diplom raqami:</div>
                            <div className="ColumnRowFirsrt">B00412884</div>
                        </div>
                        <div className="Colum">
                            <div className="ColumnRowSecondBold">Qayd sanasi:</div>
                            <div className="ColumnRowSecond">17.07.2023</div>
                        </div>
                        <div className="Colum">
                            <div className="ColumnRowFirsrtBold">O'rtacha ball:</div>
                            <div className="ColumnRowFirsrt">82.70</div>
                        </div>
                        <div className="Colum">
                            <div className="ColumnRowSecondBold">Diplom toifasi:</div>
                            <div className="ColumnRowSecond">Oddiy</div>
                        </div>
                        <div className="Colum">
                            <div className="ColumnRowFirsrtBold">O'qishga kirgan yili:</div>
                            <div className="ColumnRowFirsrt">2019</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
