import React, { useState } from "react";
import DownIcon from '../../../assets/down.svg'

export default function ListTile() {

const [show, setShow] = useState(false)

  return (
    <div onClick={()=>setShow(!show)} class="bg-white w-[100%] max-w-2xl mb-3 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 flex justify-between items-center sm:px-6">
        <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            Karemitra 
        </h3> 
        <p class="mt-1  text-sm text-gray-500">
            Content need to be change.
        </p>
        </div>
        <div>
          <img src={DownIcon} class='object-contain w-[50px] h-[50px]' />
        </div>
    </div>
    <div class={`border-t border-gray-200 ${show ? 'visible' : 'hidden' } `}>
        <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Created By
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Nishad
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Tagged
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Product Team
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    m.poul@example.com
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Salary
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    $10,000
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    About
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                </dd>
            </div>
        </dl>
    </div>
</div>
  );
}
