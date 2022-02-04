export default function Header() {
  return (
		<div className="w-full bg-white shadow-sm shadow-slate-200">
			<nav className="w-2/3 flex justify-between items-center h-16 mx-auto">
				{/* <img
					className="w-24"
					src="https://www.thundra.io/hubfs/New%20Design%20Website%20-%202020/Thundra%20Logo/Thundra-Logo-New.svg"
					alt="svelte logo" /> */}
				<h1 className="text-gray-600 font-mono text-sm text-center tracking-tight">
					<span className="text-indigo-700 font-bold">Thundra</span> Changelog
				</h1>
				<a className="font-mono text-right text-xs text-gray-400 tracking-tight hover:underline"
					href="https://thundra.io">thundra.io</a>
			</nav>
		</div>
	
  )
}
