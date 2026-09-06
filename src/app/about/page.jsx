import MainBtn from "@/components/Button"

export default function AboutPage () {
    return (
        <div>
            <h2 class="text-yellow-300 text-2xl uppercase">About us page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo atque labore, doloremque quas ipsum earum dolorum voluptatibus veniam dolore sequi, mollitia unde id ad culpa quidem sint cumque fugiat.</p>
            <MainBtn text='Save'  variant='bg-green-500 text-white' />
            <MainBtn text='Cancel'  variant='bg-red-500 text-white' />
            <MainBtn text='OK'  variant='bg-sky-900 text-sky-200' />
        </div>
    )
}
 