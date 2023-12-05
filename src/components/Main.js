export default function Main() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center
                            prose prose-h1:text-[#ffffff] prose-h1:text-[32px] prose-h1:leading-[30px] prose-h1:font-bold prose-h1:my-[21px]
                            prose-h3:text-[#f3bf99] prose-h3:text-[24px] prose-h3:font-normal prose-h3:leading-[15px] prose-h3:my-0
                            prose-a:text-[#f5f5f5] prose-a:text-[16px] prose-a:font-normal prose-a:no-underline prose-a:my-[16px]">
                <h1>Anastasia Hrynkevich</h1>
                <h3>Frontend Developer</h3>
                <a href="https://anastasia.grinkevi.ch/">anastasia.grinkevi.ch</a>
            </div>
            <div className="flex justify-around mt-8
                            prose prose-a:no-underline
                            prose-p:text-[20px] prose-p:leading-[16px] prose-p:my-0">
                <a className="flex items-center gap-3.5 border-[1px] border-[#d1d5db] bg-[#ffffff] rounded-lg py-3.5 px-10"
                   href="https://anastasia.grinkevi.ch/#section-contact">
                    <img className="w-[30px] h-[30px] my-0" src="../imgs/icons/email.svg" alt="Icon email"/>
                    <p>Email</p>
                </a>
                <a className="flex items-center gap-3.5 border-[1px] border-[#5093e2] bg-[#5093e2] rounded-lg py-3.5 px-10"
                   href="https://www.linkedin.com/in/anastasia-grinkevich?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium">
                    <img className="w-[30px] h-[30px] my-0" src="../imgs/icons/linkedin.svg" alt="Icon linkedIn"/>
                    <p className="text-[#ffffff]">LinkedIn</p>
                </a>
            </div>
            <div className="py-12 px-10
                            prose prose-h2:text-[30px] prose-h2:font-medium prose-h2:text-[#f5f5f5] prose-h2:my-0
                            prose-p:text-[16px] prose-p:text-[#dcdcdc] prose-p:font-thin prose-p:break-words proe-p:my-0">
                <div>
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div>
                    <h2>Interests</h2>
                    <p>Sport: tennis, swimming, pilates. Music scholar. Reader. Meditation. Adore nature. Hot chocolate fanatic.</p>
                </div>
            </div>
        </div>
    )
}