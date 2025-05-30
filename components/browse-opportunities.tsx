"use client";
import React from "react";
import { Input, Button, Card, CardBody, Chip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Pagination } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

// Mock data for opportunities
const mockOpportunities = [
	{
		id: "1",
		title: "Frontend Developer Intern",
		company: "TechStart",
		location: "San Francisco, CA (Remote)",
		type: "Internship",
		duration: "3 months",
		compensation: "$20-25/hour",
		skills: ["React", "TypeScript", "CSS"],
		postedDate: "2 days ago",
		logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company1",
	},
	{
		id: "2",
		title: "Marketing Assistant",
		company: "GrowthLabs",
		location: "New York, NY (Hybrid)",
		type: "Part-time",
		duration: "6 months",
		compensation: "$18/hour",
		skills: ["Social Media", "Content Creation", "Analytics"],
		postedDate: "1 week ago",
		logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company2",
	},
	{
		id: "3",
		title: "Event Staff - Product Launch",
		company: "LaunchPad Events",
		location: "Austin, TX (On-site)",
		type: "One-time",
		duration: "1 day",
		compensation: "$200 flat rate",
		skills: ["Customer Service", "Event Management"],
		postedDate: "3 days ago",
		logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company3",
	},
	{
		id: "4",
		title: "UI/UX Design Intern",
		company: "DesignHub",
		location: "Seattle, WA (Remote)",
		type: "Internship",
		duration: "4 months",
		compensation: "$22/hour",
		skills: ["Figma", "UI Design", "Prototyping"],
		postedDate: "Just now",
		logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company4",
	},
	{
		id: "5",
		title: "Brand Ambassador",
		company: "FitTech",
		location: "Chicago, IL (On-site)",
		type: "Part-time",
		duration: "Ongoing",
		compensation: "$17/hour + commission",
		skills: ["Sales", "Communication", "Fitness Knowledge"],
		postedDate: "5 days ago",
		logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company5",
	},
];

// Filter options
const locationOptions = ["Remote", "On-site", "Hybrid", "Any"];
const typeOptions = ["Internship", "Part-time", "One-time", "Any"];
const durationOptions = ["1 day", "1 week", "1 month", "3+ months", "Any"];

const BrowseOpportunities: React.FC = () => {
	const [searchQuery, setSearchQuery] = React.useState("");
	const [selectedLocation, setSelectedLocation] = React.useState("Any");
	const [selectedType, setSelectedType] = React.useState("Any");
	const [selectedDuration, setSelectedDuration] = React.useState("Any");
	const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);
	const [page, setPage] = React.useState(1);
	const router = useRouter();

	// Function to add/remove skills
	const toggleSkill = (skill: string) => {
		if (selectedSkills.includes(skill)) {
			setSelectedSkills(selectedSkills.filter((s) => s !== skill));
		} else {
			setSelectedSkills([...selectedSkills, skill]);
		}
	};

	// Add this function to navigate to project details
	const handleViewProject = (projectId: string) => {
		router.push(`/dashboard/project/${projectId}`);
	};

	// Filter opportunities based on selected filters
	const filteredOpportunities = mockOpportunities.filter((opp) => {
		// Search query filter
		if (
			searchQuery &&
			!opp.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
			!opp.company.toLowerCase().includes(searchQuery.toLowerCase())
		) {
			return false;
		}

		// Location filter
		if (selectedLocation !== "Any" && !opp.location.includes(selectedLocation)) {
			return false;
		}

		// Type filter
		if (selectedType !== "Any" && opp.type !== selectedType) {
			return false;
		}

		// Duration filter
		if (selectedDuration !== "Any" && !opp.duration.includes(selectedDuration)) {
			return false;
		}

		// Skills filter
		if (selectedSkills.length > 0 && !selectedSkills.some((skill) => opp.skills.includes(skill))) {
			return false;
		}

		return true;
	});

	return (
		<div>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
				<div>
					<h1 className="text-2xl font-bold mb-1">Browse Opportunities</h1>
					<p className="text-foreground/70">Find your next gig or internship</p>
				</div>
				<Button
					color="primary"
					startContent={<Icon icon="lucide:sliders" />}
					className="mt-4 md:mt-0"
				>
					Advanced Filters
				</Button>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
				{/* Filters sidebar */}
				<div className="lg:col-span-1">
					<Card className="border border-divider sticky top-4">
						<CardBody className="p-4 space-y-6">
							<div>
								<Input
									placeholder="Search opportunities..."
									value={searchQuery}
									onValueChange={setSearchQuery}
									startContent={<Icon icon="lucide:search" className="text-default-400" />}
									isClearable
								/>
							</div>

							<div>
								<h3 className="text-sm font-medium mb-2">Location</h3>
								<div className="flex flex-wrap gap-2">
									{locationOptions.map((location) => (
										<Chip
											key={location}
											variant={selectedLocation === location ? "solid" : "flat"}
											color={selectedLocation === location ? "primary" : "default"}
											className="cursor-pointer"
											onClick={(e) => {
												e.preventDefault();
												setSelectedLocation(location);
											}}
										>
											{location}
										</Chip>
									))}
								</div>
							</div>

							<div>
								<h3 className="text-sm font-medium mb-2">Type</h3>
								<div className="flex flex-wrap gap-2">
									{typeOptions.map((type) => (
										<Chip
											key={type}
											variant={selectedType === type ? "solid" : "flat"}
											color={selectedType === type ? "primary" : "default"}
											className="cursor-pointer"
											onClick={(e) => {
												e.preventDefault();
												setSelectedType(type);
											}}
										>
											{type}
										</Chip>
									))}
								</div>
							</div>

							<div>
								<h3 className="text-sm font-medium mb-2">Duration</h3>
								<div className="flex flex-wrap gap-2">
									{durationOptions.map((duration) => (
										<Chip
											key={duration}
											variant={selectedDuration === duration ? "solid" : "flat"}
											color={selectedDuration === duration ? "primary" : "default"}
											className="cursor-pointer"
											onClick={(e) => {
												e.preventDefault();
												setSelectedDuration(duration);
											}}
										>
											{duration}
										</Chip>
									))}
								</div>
							</div>

							<div>
								<h3 className="text-sm font-medium mb-2">Skills</h3>
								<div className="flex flex-wrap gap-2">
									{["React", "TypeScript", "Design", "Marketing", "Social Media"].map((skill) => (
										<Chip
											key={skill}
											variant={selectedSkills.includes(skill) ? "solid" : "flat"}
											color={selectedSkills.includes(skill) ? "primary" : "default"}
											className="cursor-pointer"
											onClick={(e) => {
												e.preventDefault();
												toggleSkill(skill);
											}}
										>
											{skill}
										</Chip>
									))}
								</div>
							</div>

							<Button
								variant="flat"
								color="default"
								className="w-full"
								onPress={() => {
									setSearchQuery("");
									setSelectedLocation("Any");
									setSelectedType("Any");
									setSelectedDuration("Any");
									setSelectedSkills([]);
								}}
							>
								Clear All Filters
							</Button>
						</CardBody>
					</Card>
				</div>
				{/* Opportunities list */}
				<div className="lg:col-span-3 space-y-4">
					<div className="flex justify-between items-center">
						<p className="text-sm text-foreground/70">
							Showing{" "}
							<span className="font-medium">{filteredOpportunities.length}</span> opportunities
						</p>
						<Dropdown>
							<DropdownTrigger>
								<Button
									variant="flat"
									endContent={<Icon icon="lucide:chevron-down" width={16} />}
								>
									Sort by: Recent
								</Button>
							</DropdownTrigger>
							<DropdownMenu aria-label="Sort options">
								<DropdownItem key="recent">Most Recent</DropdownItem>
								<DropdownItem key="compensation">Highest Compensation</DropdownItem>
								<DropdownItem key="duration">Duration</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>

					{filteredOpportunities.length > 0 ? (
						<div className="space-y-4">
							{filteredOpportunities.map((opportunity) => (
								<Card
									key={opportunity.id}
									className="border border-divider cursor-pointer hover:border-primary/50 transition-colors"
									isPressable
									onPress={() => handleViewProject(opportunity.id)}
								>
									<CardBody className="p-4">
										<div className="flex items-start gap-4">
											<div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
												<img
													src={opportunity.logo}
													alt={opportunity.company}
													className="w-full h-full object-cover"
												/>
											</div>

											<div className="flex-1">
												<div className="flex justify-between items-start">
													<div>
														<h3 className="font-semibold text-lg">{opportunity.title}</h3>
														<p className="text-foreground/70">{opportunity.company}</p>
													</div>
													<Chip size="sm" color="primary" variant="flat">
														{opportunity.type}
													</Chip>
												</div>

												<div className="mt-3 flex flex-wrap gap-y-2">
													<div className="flex items-center gap-1 text-sm text-foreground/70 mr-4">
														<Icon icon="lucide:map-pin" width={16} />
														<span>{opportunity.location}</span>
													</div>
													<div className="flex items-center gap-1 text-sm text-foreground/70 mr-4">
														<Icon icon="lucide:clock" width={16} />
														<span>{opportunity.duration}</span>
													</div>
													<div className="flex items-center gap-1 text-sm text-foreground/70">
														<Icon icon="lucide:dollar-sign" width={16} />
														<span>{opportunity.compensation}</span>
													</div>
												</div>

												<div className="mt-3 flex flex-wrap gap-2">
													{opportunity.skills.map((skill) => (
														<Chip key={skill} size="sm" variant="flat">
															{skill}
														</Chip>
													))}
												</div>

												<div className="mt-4 flex items-center justify-between">
													<span className="text-xs text-foreground/60">
														Posted {opportunity.postedDate}
													</span>
													<div className="flex gap-2">
														<Button
															size="sm"
															variant="flat"
															type="button"
															onClick={(e) => e.stopPropagation()}
														>
															Save
														</Button>
														<Button
															size="sm"
															color="primary"
															type="button"
															onClick={(e) => {
																e.stopPropagation();
																handleViewProject(opportunity.id);
															}}
														>
															Apply Now
														</Button>
													</div>
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
							))}

							<div className="flex justify-center mt-6">
								<Pagination
									total={10}
									page={page}
									onChange={setPage}
									showControls
								/>
							</div>
						</div>
					) : (
						<Card className="border border-divider">
							<CardBody className="p-8 flex flex-col items-center justify-center text-center">
								<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
									<Icon icon="lucide:search" className="text-primary" width={24} />
								</div>
								<h3 className="text-xl font-semibold mb-2">No opportunities found</h3>
								<p className="text-foreground/70 mb-4">
									Try adjusting your filters or search query to find more opportunities.
								</p>
								<Button
									variant="flat"
									color="primary"
									onPress={() => {
										setSearchQuery("");
										setSelectedLocation("Any");
										setSelectedType("Any");
										setSelectedDuration("Any");
										setSelectedSkills([]);
									}}
								>
									Clear Filters
								</Button>
							</CardBody>
						</Card>
					)}
				</div>
			</div>
		</div>
	);
};

export default BrowseOpportunities;