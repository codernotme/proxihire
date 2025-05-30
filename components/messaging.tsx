import React from "react";
import { Card, CardBody, Input, Button, Avatar, Divider, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

// Mock data for conversations
const mockConversations = [
	{
		id: "1",
		name: "Sarah Chen",
		company: "DataViz AI",
		avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=founder1",
		lastMessage:
			"Thanks for your application! Are you available for an interview next week?",
		timestamp: "10:30 AM",
		unread: true,
		online: true,
	},
	{
		id: "2",
		name: "David Park",
		company: "EventFlow",
		avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=founder2",
		lastMessage:
			"I've reviewed your portfolio and I'm impressed with your design work.",
		timestamp: "Yesterday",
		unread: false,
		online: false,
	},
	{
		id: "3",
		name: "Michael Rodriguez",
		company: "TechStart",
		avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=founder3",
		lastMessage:
			"Can you provide some more details about your experience with React?",
		timestamp: "Yesterday",
		unread: false,
		online: true,
	},
	{
		id: "4",
		name: "Emma Wilson",
		company: "GrowthLabs",
		avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=founder4",
		lastMessage:
			"Your application for the Marketing Assistant position has been received.",
		timestamp: "May 15",
		unread: false,
		online: false,
	},
];

// Mock messages for the selected conversation
const mockMessages = [
	{
		id: "1",
		sender: "them",
		text: "Hi there! Thanks for applying to the Frontend Developer Intern position at DataViz AI.",
		timestamp: "10:15 AM",
	},
	{
		id: "2",
		sender: "them",
		text: "I was impressed by your portfolio and experience with React. Are you available for a video interview next week?",
		timestamp: "10:16 AM",
	},
	{
		id: "3",
		sender: "me",
		text: "Hello Sarah! Thank you for considering my application. Yes, I'm available for an interview next week. What days and times work best for you?",
		timestamp: "10:20 AM",
	},
	{
		id: "4",
		sender: "them",
		text: "Great! How about Tuesday at 2:00 PM or Wednesday at 10:00 AM? We'll be discussing your experience and doing a short technical assessment.",
		timestamp: "10:25 AM",
	},
	{
		id: "5",
		sender: "me",
		text: "Tuesday at 2:00 PM works perfectly for me. Should I prepare anything specific for the technical assessment?",
		timestamp: "10:28 AM",
	},
	{
		id: "6",
		sender: "them",
		text: "Thanks for your application! Are you available for an interview next week?",
		timestamp: "10:30 AM",
	},
];

const Messaging: React.FC = () => {
	const [selectedConversation, setSelectedConversation] =
		React.useState(mockConversations[0]);
	const [searchQuery, setSearchQuery] = React.useState("");
	const [newMessage, setNewMessage] = React.useState("");

	const filteredConversations = mockConversations.filter(
		(convo) =>
			convo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			convo.company.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const handleSendMessage = () => {
		if (newMessage.trim()) {
			// In a real app, this would send the message to the backend
			console.log("Sending message:", newMessage);
			setNewMessage("");
		}
	};

	// Auto-scroll to bottom of messages
	const messagesEndRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [selectedConversation]);

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-2xl font-bold mb-1">Messages</h1>
				<p className="text-foreground/70">
					Communicate with recruiters and startups
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
				{/* Conversations list */}
				<div className="lg:col-span-1 flex flex-col h-full">
					<Card className="border border-divider flex-1 flex flex-col">
						<CardBody className="p-0 flex flex-col h-full">
							<div className="p-3 border-b border-divider">
								<Input
									placeholder="Search conversations..."
									value={searchQuery}
									onValueChange={setSearchQuery}
									startContent={
										<Icon
											icon="lucide:search"
											className="text-default-400"
										/>
									}
									size="sm"
									isClearable
								/>
							</div>

							<div className="flex-1 overflow-y-auto">
								{filteredConversations.length > 0 ? (
									filteredConversations.map((conversation) => (
										<div
											key={conversation.id}
											className={`p-3 border-b border-divider hover:bg-content2 cursor-pointer transition-colors ${
												selectedConversation.id === conversation.id
													? "bg-content2"
													: ""
											}`}
											onClick={() => setSelectedConversation(conversation)}
										>
											<div className="flex items-center gap-3">
												<div className="relative">
													<Avatar
														src={conversation.avatar}
														name={conversation.name}
														size="md"
													/>
													{conversation.online && (
														<span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-content1"></span>
													)}
												</div>

												<div className="flex-1 min-w-0">
													<div className="flex justify-between items-center">
														<h3 className="font-medium truncate">
															{conversation.name}
														</h3>
														<span className="text-xs text-foreground/60">
															{conversation.timestamp}
														</span>
													</div>
													<p className="text-sm text-foreground/70 truncate">
														{conversation.company}
													</p>
													<p className="text-xs truncate">
														{conversation.lastMessage}
													</p>
												</div>

												{conversation.unread && (
													<div className="w-2 h-2 rounded-full bg-primary"></div>
												)}
											</div>
										</div>
									))
								) : (
									<div className="p-4 text-center text-foreground/70">
										No conversations found
									</div>
								)}
							</div>

							<div className="p-3 border-t border-divider mt-auto">
								<Button
									color="primary"
									variant="flat"
									className="w-full"
									startContent={<Icon icon="lucide:plus" />}
								>
									New Message
								</Button>
							</div>
						</CardBody>
					</Card>
				</div>

				{/* Messages */}
				<div className="lg:col-span-2 flex flex-col h-full">
					<Card className="border border-divider flex-1 flex flex-col">
						<CardBody className="p-0 flex flex-col h-full">
							{/* Conversation header */}
							<div className="p-4 border-b border-divider flex items-center justify-between">
								<div className="flex items-center gap-3">
									<Avatar
										src={selectedConversation.avatar}
										name={selectedConversation.name}
										size="md"
									/>
									<div>
										<h3 className="font-medium">
											{selectedConversation.name}
										</h3>
										<p className="text-sm text-foreground/70">
											{selectedConversation.company}
										</p>
									</div>
								</div>

								<div className="flex gap-2">
									<Button
										isIconOnly
										variant="light"
										aria-label="Video call"
									>
										<Icon icon="lucide:video" />
									</Button>
									<Button
										isIconOnly
										variant="light"
										aria-label="More options"
									>
										<Icon icon="lucide:more-vertical" />
									</Button>
								</div>
							</div>

							{/* Messages */}
							<div className="flex-1 overflow-y-auto p-4 space-y-4">
								<div className="text-center">
									<span className="text-xs bg-content2 px-2 py-1 rounded-full text-foreground/60">
										Today
									</span>
								</div>

								{mockMessages.map((message) => (
									<div
										key={message.id}
										className={`flex ${
											message.sender === "me"
												? "justify-end"
												: "justify-start"
										}`}
									>
										<div
											className={`max-w-[70%] p-3 rounded-lg ${
												message.sender === "me"
													? "bg-primary text-white rounded-br-none"
													: "bg-content2 rounded-bl-none"
											}`}
										>
											<p className="text-sm">{message.text}</p>
											<p
												className={`text-xs mt-1 ${
													message.sender === "me"
														? "text-white/70"
														: "text-foreground/60"
												}`}
											>
												{message.timestamp}
											</p>
										</div>
									</div>
								))}

								<div ref={messagesEndRef} />
							</div>

							{/* Message input */}
							<div className="p-3 border-t border-divider">
								<div className="flex gap-2">
									<Button
										isIconOnly
										variant="flat"
										aria-label="Attach file"
									>
										<Icon icon="lucide:paperclip" />
									</Button>

									<Textarea
										placeholder="Type a message..."
										value={newMessage}
										onValueChange={setNewMessage}
										minRows={1}
										maxRows={4}
										className="flex-1"
										onKeyDown={(e) => {
											if (e.key === "Enter" && !e.shiftKey) {
												e.preventDefault();
												handleSendMessage();
											}
										}}
									/>

									<Button
										isIconOnly
										color="primary"
										aria-label="Send message"
										onPress={handleSendMessage}
										isDisabled={!newMessage.trim()}
									>
										<Icon icon="lucide:send" />
									</Button>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Messaging;