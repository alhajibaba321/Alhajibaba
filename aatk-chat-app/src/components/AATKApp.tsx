"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Phone, Video, MoreVertical, Paperclip, Smile, Mic, Menu } from "lucide-react"

interface Contact {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread?: number
  online?: boolean
}

interface Message {
  id: string
  text: string
  time: string
  sent: boolean
  delivered?: boolean
  read?: boolean
}

const contacts: Contact[] = [
  {
    id: "1",
    name: "Ahmad Musa",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Sannu, yaya kake?",
    time: "10:30",
    unread: 2,
    online: true,
  },
  {
    id: "2",
    name: "Fatima Ibrahim",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Na gama aikin",
    time: "09:15",
    online: true,
  },
  {
    id: "3",
    name: "Usman Garba",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Mu hadu gobe",
    time: "Jiya",
    unread: 1,
  },
  {
    id: "4",
    name: "Aisha Sani",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Na ji labarin",
    time: "Jiya",
    online: true,
  },
  {
    id: "5",
    name: "Ibrahim Yusuf",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Barka da sallah",
    time: "Makon da ya wuce",
  },
]

const messages: Message[] = [
  {
    id: "1",
    text: "Sannu Ahmad, yaya kake?",
    time: "10:25",
    sent: false,
  },
  {
    id: "2",
    text: "Lafiya lau, kai fa yaya kake?",
    time: "10:26",
    sent: true,
    delivered: true,
    read: true,
  },
  {
    id: "3",
    text: "Alhamdulillahi, ina son in tambaye ka game da aikin",
    time: "10:27",
    sent: false,
  },
  {
    id: "4",
    text: "To, me kake so ka sani?",
    time: "10:28",
    sent: true,
    delivered: true,
    read: true,
  },
  {
    id: "5",
    text: "Yaushe za mu fara aikin?",
    time: "10:30",
    sent: false,
  },
]

export default function AATKApp() {
  const [selectedContact, setSelectedContact] = useState<Contact>(contacts[0])
  const [newMessage, setNewMessage] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Contacts List */}
      <div
        className={`w-full md:w-80 bg-white border-r flex flex-col ${isMobileMenuOpen ? "block" : "hidden md:flex"}`}
      >
        {/* Header */}
        <div className="p-4 bg-green-600 text-white">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">AATK</h1>
            <Button variant="ghost" size="icon" className="text-white hover:bg-green-700">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="p-3 bg-gray-50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Nemo saƙo ko abokin ciniki" className="pl-10 bg-white" />
          </div>
        </div>

        {/* Contacts List */}
        <ScrollArea className="flex-1">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`p-3 hover:bg-gray-50 cursor-pointer border-b ${
                selectedContact.id === contact.id ? "bg-green-50" : ""
              }`}
              onClick={() => {
                setSelectedContact(contact)
                setIsMobileMenuOpen(false)
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
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
                    <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                    <span className="text-xs text-gray-500">{contact.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                    {contact.unread && (
                      <Badge className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">{contact.unread}</Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className={`flex-1 flex flex-col ${isMobileMenuOpen ? "hidden md:flex" : "flex"}`}>
        {/* Chat Header */}
        <div className="p-4 bg-green-600 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-green-700"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="relative">
              <Avatar>
                <AvatarImage src={selectedContact.avatar || "/placeholder.svg"} alt={selectedContact.name} />
                <AvatarFallback>
                  {selectedContact.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {selectedContact.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-green-600"></div>
              )}
            </div>
            <div>
              <h2 className="font-medium">{selectedContact.name}</h2>
              <p className="text-sm text-green-100">{selectedContact.online ? "Yana kan layi" : "Ba a kan layi ba"}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-green-700">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-green-700">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-green-700">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4 bg-gray-50">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sent ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sent ? "bg-green-600 text-white" : "bg-white text-gray-800 border"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div
                    className={`flex items-center justify-end mt-1 space-x-1 ${
                      message.sent ? "text-green-100" : "text-gray-500"
                    }`}
                  >
                    <span className="text-xs">{message.time}</span>
                    {message.sent && (
                      <div className="flex">
                        <div className={`w-3 h-3 ${message.delivered ? "text-green-200" : "text-green-300"}`}>✓</div>
                        {message.read && <div className="w-3 h-3 text-blue-300 -ml-1">✓</div>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 bg-white border-t">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <Button type="button" variant="ghost" size="icon">
              <Paperclip className="h-5 w-5 text-gray-500" />
            </Button>
            <div className="flex-1 relative">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Rubuta saƙo..."
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2"
              >
                <Smile className="h-4 w-4 text-gray-500" />
              </Button>
            </div>
            {newMessage.trim() ? (
              <Button type="submit" size="icon" className="bg-green-600 hover:bg-green-700">
                <Send className="h-4 w-4" />
              </Button>
            ) : (
              <Button type="button" size="icon" className="bg-green-600 hover:bg-green-700">
                <Mic className="h-4 w-4" />
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}