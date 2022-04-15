import LoadingComponent from '../components/LodingComponent';
export const loadingHOC = (Component:any, loadingState:boolean) => 
   function WithLoading () {
       return (
        <div className="relative min-h-screen">
            {!!loadingState ?
            (
                <div className="z-50 fixed w-100 h-100 flex justify-center items-center">
                    <LoadingComponent />
                </div>
            )
            : (
                <Component />
            )
            }
        </div>
    )
}