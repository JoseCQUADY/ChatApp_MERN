
const Contact = () => {
    return (
        <>
            <div className="flex gap-2 items-center rounder cursor-pointer hover:bg-slate-500 p-2 py-1">
                <div className="avatar online">

                    <div className="rounded-full w-12">

                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className=" flex gap-3 justify-between">
                        <p>John Doe</p>
                        <span>😈</span>
                    </div>
                </div>
            </div>
            <div className="divider my-1 h-1"></div>
        </>
    )
}

export default Contact