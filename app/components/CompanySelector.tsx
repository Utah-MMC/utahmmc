'use client'

import { useState } from 'react'

interface Company {
  code: string
  name: string
}

export default function CompanySelector() {
  const [searchCode, setSearchCode] = useState('')
  const [searchName, setSearchName] = useState('')
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)

  // Sample companies - replace with your actual portfolio companies
  const companies: Company[] = [
    { code: 'LLC001', name: 'Utah MMC LLC 1' },
    { code: 'LLC002', name: 'Utah MMC LLC 2' },
    { code: 'LLC003', name: 'Utah MMC LLC 3' },
    { code: 'LLC004', name: 'Utah MMC LLC 4' },
    { code: 'LLC005', name: 'Utah MMC LLC 5' },
    { code: 'LLC006', name: 'Utah MMC LLC 6' },
    { code: 'LLC007', name: 'Utah MMC LLC 7' },
    { code: 'LLC008', name: 'Utah MMC LLC 8' },
    { code: 'LLC009', name: 'Utah MMC LLC 9' },
    { code: 'LLC010', name: 'Utah MMC LLC 10' },
    { code: 'LLC011', name: 'Utah MMC LLC 11' },
    { code: 'LLC012', name: 'Utah MMC LLC 12' },
    { code: 'LLC013', name: 'Utah MMC LLC 13' },
    { code: 'LLC014', name: 'Utah MMC LLC 14' },
    { code: 'LLC015', name: 'Utah MMC LLC 15' },
    { code: 'LLC016', name: 'Utah MMC LLC 16' },
    { code: 'LLC017', name: 'Utah MMC LLC 17' },
    { code: 'LLC018', name: 'Utah MMC LLC 18' },
    { code: 'LLC019', name: 'Utah MMC LLC 19' },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!searchCode && !searchName) {
      alert("You must complete the 'Company Code/Name' section before you can continue.")
      return false
    }

    if (searchName && searchName.length < 2) {
      alert("Please enter more characters to complete your search")
      return false
    }

    // Filter companies based on search
    const filtered = companies.filter(company => {
      const codeMatch = searchCode && company.code.toLowerCase().includes(searchCode.toLowerCase())
      const nameMatch = searchName && company.name.toLowerCase().includes(searchName.toLowerCase())
      return codeMatch || nameMatch
    })

    if (filtered.length === 1) {
      setSelectedCompany(filtered[0])
    } else if (filtered.length > 1) {
      // Show multiple results - you can implement a selection UI here
      alert(`Found ${filtered.length} companies. Please refine your search.`)
    } else {
      alert('No companies found matching your search.')
    }

    return false
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="section-heading text-3xl sm:text-4xl text-black mb-4">
          Select Your Company
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Please enter the company code or part of the company name and select &apos;next&apos;
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">

      <form onSubmit={handleSearch} className="space-y-6">
        <div>
          <input
            type="text"
            name="SearchCode"
            id="SearchCode"
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
            placeholder="Company Code"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-indigo-600 text-black"
            maxLength={12}
          />
        </div>

        <div className="text-center">
          <span className="text-gray-700 font-bold">or</span>
        </div>

        <div>
          <input
            type="text"
            name="SearchName"
            id="SearchName"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Company Name"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-indigo-600 text-black"
            maxLength={50}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition-colors uppercase"
          >
            Next
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            <label htmlFor="SearchCode" className="font-semibold">Company Code</label>
          </p>
          <p className="text-sm text-gray-600">
            <label htmlFor="SearchName" className="font-semibold">Company Name</label>
          </p>
        </div>
      </form>

      {selectedCompany && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
          <p className="text-green-800">
            Selected: <strong>{selectedCompany.name}</strong> ({selectedCompany.code})
          </p>
        </div>
      )}
      </div>
    </div>
  )
}

