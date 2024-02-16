export default function Layout({children} : {children: React.ReactNode}){
    return (<div className="flex grow justify-center pt-20">
        {children}
    </div>)
}