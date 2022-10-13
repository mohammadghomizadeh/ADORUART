// @flow
import * as React from 'react';
type Props = {
    toggle:any,
    close:any,
    createAccount:any,
    loginAccount:any,
};
export const ModalRegister = (props: Props) => {
    const {toggle,close,createAccount,loginAccount} = props;
    
    return (

        <>
            {
                toggle && (
                    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 bg-gray-400  opacity-50 transition-opacity z-10"></div>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex flex-col items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                                <div className={"flex mt-3 relative z-50"}>
                                    <section className={"md:flex gap-2 bg-white border-2 border-nft p-2 relative"}>
                                    <span className={"absolute -top-4 -right-4 cursor-pointer"} onClick={close}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="15" fill="white" stroke="#7B7575" strokeWidth="2"/>
                                        <path d="M17.408 15.9999L21.708 11.7099C21.8963 11.5216 22.0021 11.2662 22.0021 10.9999C22.0021 10.7336 21.8963 10.4782 21.708 10.2899C21.5197 10.1016 21.2643 9.99585 20.998 9.99585C20.7317 9.99585 20.4763 10.1016 20.288 10.2899L15.998 14.5899L11.708 10.2899C11.5197 10.1016 11.2643 9.99585 10.998 9.99585C10.7317 9.99585 10.4763 10.1016 10.288 10.2899C10.0997 10.4782 9.99389 10.7336 9.99389 10.9999C9.99389 11.2662 10.0997 11.5216 10.288 11.7099L14.588 15.9999L10.288 20.2899C10.1943 20.3829 10.1199 20.4935 10.0691 20.6154C10.0183 20.7372 9.99219 20.8679 9.99219 20.9999C9.99219 21.132 10.0183 21.2627 10.0691 21.3845C10.1199 21.5064 10.1943 21.617 10.288 21.7099C10.3809 21.8037 10.4915 21.8781 10.6134 21.9288C10.7353 21.9796 10.866 22.0057 10.998 22.0057C11.13 22.0057 11.2607 21.9796 11.3826 21.9288C11.5044 21.8781 11.615 21.8037 11.708 21.7099L15.998 17.4099L20.288 21.7099C20.3809 21.8037 20.4915 21.8781 20.6134 21.9288C20.7353 21.9796 20.866 22.0057 20.998 22.0057C21.13 22.0057 21.2607 21.9796 21.3826 21.9288C21.5044 21.8781 21.615 21.8037 21.708 21.7099C21.8017 21.617 21.8761 21.5064 21.9269 21.3845C21.9776 21.2627 22.0038 21.132 22.0038 20.9999C22.0038 20.8679 21.9776 20.7372 21.9269 20.6154C21.8761 20.4935 21.8017 20.3829 21.708 20.2899L17.408 15.9999Z" fill="#7B7575"/>
                                        </svg>
                                    </span>
                                        <div>
                                            <header className={"bg-headerLogin flex items-center justify-center h-120px md:px-20 px-6"}>
                                    <span className={" text-black font-extrabold  text-2xl"}>
                                        I am an art lover,<br/> a collector
                                    </span>
                                            </header>
                                            <main className={"bg-bodyLogin text-title flex flex-col items-center justify-center text-center px-4 md:px-20"}>
                                                <p className={"title py-6"}>
                                                    Create an account to save your favorites<br/>
                                                    and to receive personal offers.
                                                </p>
                                                <button onClick={createAccount} className={"bg-secondary text-lg py-4 w-full rounded-sm   text-white"}>
                                                    CREATE AN ACCOUNT
                                                </button>
                                                <span className={"text-nft mt-12"}>
                                        Already have account ?
                                    </span>
                                                <span onClick={loginAccount} className={"mt-4 mb-10 font-bold border-b underline cursor-pointer"}>
                                        SIGN IN
                                    </span>
                                            </main>
                                        </div>
                                        <div>
                                            <header className={"bg-headerLogin flex items-center justify-center h-120px md:px-20 px-4"}>
                                    <span className={" text-black font-extrabold  text-2xl"}>
                                        I'm a creator
                                    </span>
                                            </header>
                                            <main className={"bg-bodyLogin text-title flex flex-col items-center justify-center text-center px-4 md:px-20"}>
                                                <p className={"title py-6"}>
                                                    You can apply online, and we will respond to<br/>
                                                    you as quickly as possible.
                                                </p>
                                                <button className={"bg-secondary text-lg py-4 w-full rounded-sm   text-white"}>
                                                    APPLY ONLINE
                                                </button>
                                                <span className={"text-nft mt-12"}>
                                        You already are a ADORUART creator?
                                    </span>
                                                <span onClick={loginAccount}  className={"mt-4 mb-10 font-bold border-b underline cursor-pointer"}>
                                        SIGN IN
                                    </span>
                                            </main>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    );
};
