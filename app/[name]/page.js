export default function Page({params}) {
    return (
        <>

            <div className="flex justify-center items-center h-screen">
                <div className="flex justify-center items-center">
                    <h1 className="font-extrabold text-9xl animate-bounce">{params.name} hii</h1>

                </div>
            </div>

        </>
    )
};
