export default function FormAction({
  handleSubmit,
  type='Button',
  action='submit',
  text
}){
  return(
      <>
      {
          type==='Button' ?
          <button
              type={action}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#008080] hover:bg-white-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
              onSubmit={handleSubmit}
          >

              {text}
          </button>
          :
          <></>
      }
      </>
  )
}