export default function BrakeRule({ classname }: { classname?: string }) {
  return (
    <hr
      className={` ${classname ? classname : 'my-6'} ml-1 h-0.5 border-t-0 bg-base-200`}
    />
  )
}
