import React from 'react'

function Card({myObj,myObj2="Nick Name"}) {
  return (
      <div class="flex flex-col items-center gap-6 p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" />
  </div>
  <div class="flex items-center">
    <span class="text-2xl font-medium">{myObj}</span>
    <span class="font-medium text-sky-500">{myObj2}</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default Card