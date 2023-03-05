
type HeaderProps = {
    name: string;
    href: string;
}
export default function HeaderText(props: HeaderProps) {

    const {name, href} = props;

    return (
        <div>
            <a href={href}
               className="text-sm font-semibold leading-6 text-gray-900">
                {name}
            </a>
        </div>
    )
}