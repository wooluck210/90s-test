import React, { useState } from 'react'

export default function Login() {

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    return (
        <>
            <main>
                <h1>naver</h1>
                <button onClick={() => handleButtonClick(1)}>ID로그인</button>
                <button onClick={() => handleButtonClick(2)}>일회용 번호</button>
                <button onClick={() => handleButtonClick(3)}>QR코드</button>
                {selectedButton === 1 && (
                    <form>
                        <label>Hello</label>
                        <div>
                            <input type="id" placeholder='아이디' />
                            <input type="password" placeholder='비밀번호' />
                        </div>
                        <div>
                            <span>
                                <input type="checkbox" value="login_continue" />로그인 상태 유지
                            </span>
                            <span>
                                IP보안<input type="radio" value="protected_IP"/>
                            </span>
                        </div>
                        <button>로그인</button>
                    </form>
                )}
                {selectedButton === 2 && (
                    <form>
                        <label>im hyeonjin</label>
                    </form>
                )}
                {selectedButton === 3 && (
                    <form>
                        <label>im junha</label>
                    </form>
                )}
            </main>
        </>
    )
}
