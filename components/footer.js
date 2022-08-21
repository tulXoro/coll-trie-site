export default function Footer() {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="./" className="flex items-center mb-4 sm:mb-0">
                    <img src="" className="mr-3 h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CollTrie</span>
                </a>
                <table className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400 table-fixed justify-center">
                    <tr>
                        <td>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Projects</a>
                        </td>
                        <td>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Services</a>
                        </td>
                        <td>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Contact</a>
                        </td>
                        <td>
                            <a href="#" className="hover:underline">About Us</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Find out about our work.</span>
                        </td>
                        <td>
                            <span>Learn more about our services.</span>
                        </td>
                        <td>
                            <span>Reach out to us for questions/commissions</span>
                        </td>
                        <td>
                            <span>Get to know about our group and our goals.Reach out to us for questions/commissions.</span>
                        </td>
                    </tr>
                </table>
            </div>
        </footer>
    )
}