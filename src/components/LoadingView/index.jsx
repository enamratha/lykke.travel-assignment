import {TailSpin} from 'react-loader-spinner'

const LoadingView = () => (
  <div className="flex h-[50vh] justify-center">
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
)

export default LoadingView
