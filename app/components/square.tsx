import Image from 'next/image'

interface Props {
    num: number;
}

export default function Square(props: Props) {

    const { num } = props;
    
    let path = "/images/" + num.toString() + ".jpg"

    return ( 
        <div className="border-orange-950 border-4 aspect-[2/3] text-center">
            <Image 
            src={path} 
            width={200}
            height={300}
            alt="Loteria Image" 
            className='h-full'/>
        </div>
    );
}