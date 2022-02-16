import Link from 'next/link'

export default function Header() {
  return (
		<div className="w-full backdrop-blur-xl bg-white/50 fixed shadow-sm shadow-slate-200 mt-0 pt-0">
			<nav className="w-2/3 flex justify-between items-center h-16 mx-auto">
				{/* <img
					className="w-24"
					src="https://www.thundra.io/hubfs/New%20Design%20Website%20-%202020/Thundra%20Logo/Thundra-Logo-New.svg"
					alt="svelte logo" /> */}
				<a href="/" className="text-gray-600 font-mono text-sm text-center tracking-tight">
					<span className="text-indigo-700 font-bold">Foresight</span> Changelog
				</a>
				<a className="font-mono text-right text-xs text-gray-400 tracking-tight hover:underline"
					href="https://foresight.thundra.io">foresight.thundra.io</a>
			</nav>
		</div>
	
  )
}
