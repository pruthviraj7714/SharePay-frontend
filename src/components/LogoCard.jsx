import { CiBank } from 'react-icons/ci'

const LogoCard = () => {
  return (
     <div className="flex flex-col justify-center items-center h-screen">
          <div className="py-5 flex items-center">
            <CiBank size={75} />
            <h1 className="text-5xl font-extrabold ml-4">
              Share<span className="text-blue-500">Pay</span>
            </h1>
          </div>
          <div className="text-xl max-w-screen-sm py-5">
            <h3 className="font-mono">
              "Our team is dedicated to creating a Paytm integration that
              ensures seamless financial interactions. From user-friendly
              interfaces to robust security features, we're committed to
              building a transaction experience that instills confidence and
              ease in every payment."
            </h3>
          </div>
        </div>
  )
}

export default LogoCard