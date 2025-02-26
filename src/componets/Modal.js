
import "./Modal.css"

const Modal = ({ closeModal, closeModalUntilExpires }) => {
    return (
        <div className="container">
            <div className="modalBackground"/>
            <div className="modalContainer">
                <div className="modalContent">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
                labore sint impedit, optio mollitia quae soluta possimus itaque
                obcaecati unde expedita laudantium ducimus distinctio quasi rerum
                molestiae velit, quibusdam cum.
                </div>
                <div className="modalCloseWrapper">
                <p onClick={closeModalUntilExpires}>오늘 하루 더 이상 보지 않기</p>
                <p onClick={closeModal}>닫기</p>
                </div>
            </div>
        </div>
    )
}


export default Modal