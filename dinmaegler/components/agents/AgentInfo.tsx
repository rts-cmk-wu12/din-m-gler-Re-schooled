interface AgentInfoProps {
    name: string
    description: string
  }
  
  const AgentInfo = ({ name, description }: AgentInfoProps) => {
    return (
      <div className="relative mb-6">
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Om {name}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    )
  }
  
  export default AgentInfo
  