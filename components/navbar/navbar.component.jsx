import React from 'react'

const NavBar = () => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-blue-400  p-4 relative bottom-2 w-full">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                <span class="font-semibold text-xl tracking-tight">Alexandria Library</span>
            </div>
        </nav>
    )
}

export default NavBar