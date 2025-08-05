"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Search, Phone, Video, MoreVertical, Send, Paperclip, Smile, Mic } from "lucide-react"

interface Contact {
  id: string
  name: string
  lastMessage: string
  time: string
  unread: number
  avatar: string
  online: boolean
}

interface Message {
  id: string
  text: string
  time: string
  sent: boolean
  delivered: boolean
  read: boolean
}

export default function AATKApp() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [message, setMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const contacts: Contact[] = [
    {
      id: "1",
      name: "Ahmad Musa",
      lastMessage: "Sannu, yaya kake?",
      time: "10:30",
      unread: 2,
      avatar: "/placeholder.svg?height=40&width=40&text=AM",
      online: true,
    },
    {
      id: "2",
      name: "Fatima Ibrahim",
      lastMessage: "Na gode sosai",
      time: "09:15",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40&text=FI",
      online: false,
    },
    {
      id: "3",
      name: "Usman Garba",
      lastMessage: "Sai anjima",
      time: "Jiya",
      unread: 1,
      avatar: "/placeholder.svg?height=40&width=40&text=UG",
      online: true,
    },
    {
      id: "4",
      name: "Aisha Mohammed",
      lastMessage: "Barka da safe",
      time: "Jiya",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40&text=AM",
      online: false,
    },
  ]

  const messages: Message[] = [
    {
      id: "1",
      text: "Sannu, yaya kake?",
      time: "10:25",
      sent: false,
      delivered: true,
      read: true,
    },
    {
      id: "2",
      text: "Lafiya lau, kai fa?",
      time: "10:26",
      sent: true,
      delivered: true,
      read: true,
    },
    {
      id: "3",
      text: "Alhamdulillahi, lafiya kalau",
      time: "10:27",
      sent: false,
      delivered: true,
      read: true,
    },
    {
      id: "4",
      text: "Me kake yi a yau?",
      time: "10:30",
      sent: false,
      delivered: true,
      read: false,
    },
  ]

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSendMessage = () => {
    if (message.trim()) {
      // Anan za a iya kara logic don aika sakon
      setMessage("")
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Contacts */}
      <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 bg-green-600 text-white">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">AATK</h1>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-green-700">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Nemo sakon ko lamba..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
          </div>
        </div>

        {/* Contacts List */}
        <ScrollArea className="flex-1">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedContact?.id === contact.id ? "bg-green-50" : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={contact.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {contact.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {contact.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 truncate">{contact.name}</h3>
                    <span className="text-xs text-gray-500">{contact.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                    {contact.unread > 0 && <Badge className="bg-green-500 text-white text-xs">{contact.unread}</Badge>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedContact ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-green-600 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={selectedContact.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {selectedContact.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {selectedContact.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div>
                  <h2 className="font-semibold">{selectedContact.name}</h2>
                  <p className="text-sm text-green-100">{selectedContact.online ? "Online" : "Offline"}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-green-700">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-green-700">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-green-700">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.sent ? "bg-green-500 text-white" : "bg-white text-gray-800 border"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <div className="flex items-center justify-end mt-1 space-x-1">
                        <span className={`text-xs ${msg.sent ? "text-green-100" : "text-gray-500"}`}>{msg.time}</span>
                        {msg.sent && (
                          <div className="flex">
                            <div
                              className={`w-1 h-1 rounded-full ${msg.delivered ? "bg-green-200" : "bg-gray-400"}`}
                            ></div>
                            <div
                              className={`w-1 h-1 rounded-full ml-0.5 ${msg.read ? "bg-green-200" : "bg-gray-400"}`}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Paperclip className="h-5 w-5 text-gray-500" />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    placeholder="Rubuta sako..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="pr-10"
                  />
                  <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <Smile className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
                {message.trim() ? (
                  <Button onClick={handleSendMessage} className="bg-green-500 hover:bg-green-600">
                    <Send className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm">
                    <Mic className="h-5 w-5 text-gray-500" />
                  </Button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="text-6xl font-bold text-green-600 mb-4">AATK</div>
              <p className="text-gray-600">Zaɓi wani mutum don fara hira</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}