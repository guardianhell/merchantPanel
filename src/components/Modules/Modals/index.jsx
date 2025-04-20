import { useAtom } from 'jotai'
import React from 'react'
import { isOpenModalAtom } from '../../../jotai/atoms'

const PopUpModal = ({ modalTitle, message }) => {

    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)

    return (
        <dialog className={`modal ${isOpenModal ? 'modal-open' : ''}`}>
            <div
                className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modalTitle"
            >
                <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                    <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">{modalTitle}</h2>

                    <div className="mt-4">
                        <p className="text-pretty text-gray-700">
                            {message}
                        </p>
                    </div>

                    <footer className="mt-6 flex justify-end gap-2">

                        <button
                            onClick={() => {
                                setIsOpenModal(false)
                            }}
                            type="button"
                            className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        >
                            OK
                        </button>
                    </footer>
                </div>
            </div>
        </dialog>
    )
}

export default PopUpModal