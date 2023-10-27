import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between items-center mb-4 text-customColor-primary">
            <h2 className="font-bold md:text-xl text-md">
                {title}
                {linkHref && linkTitle
                    ?
                        <Link href={linkHref} className="">
                            <span className="text-salmon font-medium text-sm ml-4 hover:underline">{linkTitle}</span>
                        </Link>
                    :
                    null
                }
            </h2>
            <div>
                <button className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold">＜</button>
                <button className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold">＞</button>
            </div>
        </div>
    )
}

export default Header