import ConnectButton from './connectbutton';

export default function Home() {
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </div>
                    {/*}
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
    */}
                </div>
                <a href="/" className="btn btn-ghost text-xl">Cool Castor 🦫</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/*  */}

                {/*}

                <ul class="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
*/}
            </div>

            <div className="navbar-end">
                <ConnectButton />
                <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>About</button>
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">About</h3>
                    <p className="py-2">
                        A project by <a className='underline' target='_blank' href="https://warpcast.com/grands-marquis">Grands Marquis</a> and the Muse DAO.
                    </p>
                    <p className="py-2">
                        it's <a className='underline' target='_blank' href="https://github.com/verynifty/cool-castor">Open Source on Github</a> and powered by <a className='underline' target='_blank' href="https://neynar.com/">Neynar</a>, Opensea and Alchemy.
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
