type BoxProps = {
    label: string, 
    value: number
}

export default function CountdownBox({ label, value } : BoxProps) {
    return (
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold">{String(value).padStart(2, "0")}</span>
          <span className="text-sm uppercase">{label}</span>
        </div>
    );
}
