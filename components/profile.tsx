"use client";

import React from "react";
import { Card, CardBody, Input, Button, Textarea, Tabs, Tab, Chip, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../contexts/auth-context";

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [selected, setSelected] = React.useState("personal");
  const [isEditing, setIsEditing] = React.useState(false);
  
  // Mock profile data
  const [profileData, setProfileData] = React.useState({
    name: user?.name || "Alex Johnson",
    email: user?.email || "alex.johnson@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    university: "UC Berkeley",
    major: "Computer Science",
    graduationYear: "2024",
    bio: "Senior Computer Science student with experience in frontend development and UI/UX design. Looking for internships and part-time opportunities in tech startups.",
    skills: ["React", "TypeScript", "UI/UX Design", "Node.js", "Figma", "Git"],
    education: [
      {
        id: "1",
        school: "UC Berkeley",
        degree: "Bachelor of Science in Computer Science",
        years: "2020 - 2024",
        gpa: "3.8/4.0"
      }
    ],
    experience: [
      {
        id: "1",
        company: "TechStart",
        position: "Frontend Developer Intern",
        duration: "Summer 2022",
        description: "Developed responsive web applications using React and TypeScript. Collaborated with the design team to implement UI components."
      },
      {
        id: "2",
        company: "University IT Department",
        position: "Student Developer",
        duration: "2021 - Present",
        description: "Maintain and update university websites. Implement accessibility improvements and responsive designs."
      }
    ],
    projects: [
      {
        id: "1",
        name: "Personal Portfolio Website",
        description: "Designed and developed a personal portfolio website using React, Next.js, and Tailwind CSS.",
        link: "https://portfolio.example.com"
      },
      {
        id: "2",
        name: "Task Management App",
        description: "Built a full-stack task management application with React, Node.js, and MongoDB.",
        link: "https://github.com/alexj/task-app"
      }
    ]
  });
  
  const handleSaveProfile = () => {
    // In a real app, this would save the profile data to the backend
    console.log("Saving profile:", profileData);
    setIsEditing(false);
  };
  
  const addSkill = (skill: string) => {
    if (skill && !profileData.skills.includes(skill)) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, skill]
      });
    }
  };
  
  const removeSkill = (skill: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter(s => s !== skill)
    });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">My Profile</h1>
          <p className="text-foreground/70">Manage your personal information and resume</p>
        </div>
        
        {isEditing ? (
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button 
              variant="flat" 
              onPress={() => setIsEditing(false)}
            >
              Cancel
            </Button>
            <Button 
              color="primary" 
              onPress={handleSaveProfile}
            >
              Save Changes
            </Button>
          </div>
        ) : (
          <Button 
            color="primary" 
            startContent={<Icon icon="lucide:edit" />}
            className="mt-4 md:mt-0"
            onPress={() => setIsEditing(true)}
          >
            Edit Profile
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile sidebar */}
        <div className="lg:col-span-1">
          <Card className="border border-divider">
            <CardBody className="p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img 
                  src={user?.avatar || "https://img.heroui.chat/image/avatar?w=200&h=200&u=student1"} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {isEditing ? (
                <Button 
                  size="sm" 
                  variant="flat"
                  className="mb-4"
                >
                  Change Photo
                </Button>
              ) : null}
              
              <h2 className="text-xl font-semibold">{profileData.name}</h2>
              <p className="text-foreground/70 mb-4">{profileData.university} • {profileData.major}</p>
              
              <div className="w-full">
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon="lucide:mail" className="text-foreground/70" width={16} />
                  <span className="text-sm">{profileData.email}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon="lucide:phone" className="text-foreground/70" width={16} />
                  <span className="text-sm">{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:map-pin" className="text-foreground/70" width={16} />
                  <span className="text-sm">{profileData.location}</span>
                </div>
              </div>
              
              <Divider className="my-4" />
              
              <div className="w-full">
                <h3 className="font-medium text-left mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map(skill => (
                    <Chip 
                      key={skill} 
                      size="sm"
                      onClose={isEditing ? () => removeSkill(skill) : undefined}
                    >
                      {skill}
                    </Chip>
                  ))}
                </div>
                
                {isEditing && (
                  <div className="mt-4">
                    <Input
                      size="sm"
                      placeholder="Add a skill..."
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          addSkill((e.target as HTMLInputElement).value);
                          (e.target as HTMLInputElement).value = "";
                        }
                      }}
                    />
                  </div>
                )}
              </div>
              
              <Divider className="my-4" />
              
              <div className="w-full">
                <h3 className="font-medium text-left mb-2">Profile Completion</h3>
                <div className="w-full bg-content2 rounded-full h-2 mb-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
                <p className="text-xs text-foreground/70 text-left">
                  85% complete - Add a portfolio link to reach 100%
                </p>
              </div>
              
              <Divider className="my-4" />
              
              <Button 
                color="primary" 
                variant="flat" 
                className="w-full"
                startContent={<Icon icon="lucide:download" />}
              >
                Download Resume
              </Button>
            </CardBody>
          </Card>
        </div>
        
        {/* Profile content */}
        <div className="lg:col-span-2">
          <Card className="border border-divider">
            <CardBody className="p-0">
              <Tabs 
                aria-label="Profile tabs" 
                selectedKey={selected} 
                onSelectionChange={setSelected as any}
                color="primary"
                variant="bordered"
                classNames={{
                  tabList: "p-0 border-b border-divider",
                  cursor: "bg-primary",
                  tab: "px-6 py-4",
                }}
              >
                <Tab 
                  key="personal" 
                  title={
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:user" width={18} />
                      <span>Personal Info</span>
                    </div>
                  }
                >
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">About Me</h3>
                      {isEditing ? (
                        <Textarea
                          value={profileData.bio}
                          onValueChange={(value) => setProfileData({...profileData, bio: value})}
                          minRows={3}
                          placeholder="Write a short bio about yourself..."
                        />
                      ) : (
                        <p className="text-foreground/80">{profileData.bio}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-4">Personal Details</h3>
                        <div className="space-y-4">
                          <Input
                            label="Full Name"
                            value={profileData.name}
                            onValueChange={(value) => setProfileData({...profileData, name: value})}
                            isReadOnly={!isEditing}
                          />
                          <Input
                            label="Email"
                            value={profileData.email}
                            onValueChange={(value) => setProfileData({...profileData, email: value})}
                            isReadOnly={!isEditing}
                          />
                          <Input
                            label="Phone"
                            value={profileData.phone}
                            onValueChange={(value) => setProfileData({...profileData, phone: value})}
                            isReadOnly={!isEditing}
                          />
                          <Input
                            label="Location"
                            value={profileData.location}
                            onValueChange={(value) => setProfileData({...profileData, location: value})}
                            isReadOnly={!isEditing}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-4">Education</h3>
                        <div className="space-y-4">
                          <Input
                            label="University/College"
                            value={profileData.university}
                            onValueChange={(value) => setProfileData({...profileData, university: value})}
                            isReadOnly={!isEditing}
                          />
                          <Input
                            label="Major/Field of Study"
                            value={profileData.major}
                            onValueChange={(value) => setProfileData({...profileData, major: value})}
                            isReadOnly={!isEditing}
                          />
                          <Input
                            label="Graduation Year"
                            value={profileData.graduationYear}
                            onValueChange={(value) => setProfileData({...profileData, graduationYear: value})}
                            isReadOnly={!isEditing}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                
                <Tab 
                  key="experience" 
                  title={
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:briefcase" width={18} />
                      <span>Experience</span>
                    </div>
                  }
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-lg">Work Experience</h3>
                      {isEditing && (
                        <Button 
                          size="sm" 
                          color="primary" 
                          variant="flat"
                          startContent={<Icon icon="lucide:plus" />}
                        >
                          Add Experience
                        </Button>
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      {profileData.experience.map((exp, index) => (
                        <div key={exp.id} className="border-b border-divider pb-6 last:border-0 last:pb-0">
                          <div className="flex justify-between">
                            <div>
                              <h4 className="font-medium">{exp.position}</h4>
                              <p className="text-foreground/70">{exp.company}</p>
                              <p className="text-sm text-foreground/60">{exp.duration}</p>
                            </div>
                            {isEditing && (
                              <div className="flex gap-2">
                                <Button size="sm" variant="light" isIconOnly>
                                  <Icon icon="lucide:edit-2" width={16} />
                                </Button>
                                <Button size="sm" variant="light" color="danger" isIconOnly>
                                  <Icon icon="lucide:trash-2" width={16} />
                                </Button>
                              </div>
                            )}
                          </div>
                          <p className="mt-2 text-sm">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mt-8 mb-4">
                      <h3 className="font-semibold text-lg">Projects</h3>
                      {isEditing && (
                        <Button 
                          size="sm" 
                          color="primary" 
                          variant="flat"
                          startContent={<Icon icon="lucide:plus" />}
                        >
                          Add Project
                        </Button>
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      {profileData.projects.map((project, index) => (
                        <div key={project.id} className="border-b border-divider pb-6 last:border-0 last:pb-0">
                          <div className="flex justify-between">
                            <div>
                              <h4 className="font-medium">{project.name}</h4>
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary text-sm hover:underline"
                              >
                                {project.link}
                              </a>
                            </div>
                            {isEditing && (
                              <div className="flex gap-2">
                                <Button size="sm" variant="light" isIconOnly>
                                  <Icon icon="lucide:edit-2" width={16} />
                                </Button>
                                <Button size="sm" variant="light" color="danger" isIconOnly>
                                  <Icon icon="lucide:trash-2" width={16} />
                                </Button>
                              </div>
                            )}
                          </div>
                          <p className="mt-2 text-sm">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab>
                
                <Tab 
                  key="portfolio" 
                  title={
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:image" width={18} />
                      <span>Portfolio</span>
                    </div>
                  }
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-semibold text-lg">Portfolio & Work Samples</h3>
                      {isEditing && (
                        <Button 
                          color="primary" 
                          variant="flat"
                          startContent={<Icon icon="lucide:upload" />}
                        >
                          Upload Work
                        </Button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((item) => (
                        <Card key={item} className="border border-divider">
                          <CardBody className="p-0">
                            <div className="aspect-video bg-content2 relative overflow-hidden">
                              <img 
                                src={`https://img.heroui.chat/image/ai?w=600&h=400&u=portfolio${item}`} 
                                alt={`Portfolio item ${item}`} 
                                className="w-full h-full object-cover"
                              />
                              {isEditing && (
                                <div className="absolute top-2 right-2 flex gap-2">
                                  <Button size="sm" variant="flat" isIconOnly className="bg-content1/80 backdrop-blur-md">
                                    <Icon icon="lucide:edit-2" width={16} />
                                  </Button>
                                  <Button size="sm" variant="flat" color="danger" isIconOnly className="bg-content1/80 backdrop-blur-md">
                                    <Icon icon="lucide:trash-2" width={16} />
                                  </Button>
                                </div>
                              )}
                            </div>
                            <div className="p-3">
                              <h4 className="font-medium">Project Title {item}</h4>
                              <p className="text-xs text-foreground/70">UI Design • Web Development</p>
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                    
                    {isEditing && (
                      <div className="mt-6 border-2 border-dashed border-divider rounded-lg p-8 text-center">
                        <div className="flex flex-col items-center">
                          <Icon icon="lucide:upload-cloud" className="text-foreground/50 mb-2" width={32} />
                          <p className="text-foreground/70 mb-2">Drag and drop files here or click to browse</p>
                          <p className="text-xs text-foreground/50 mb-4">Supports JPG, PNG, PDF up to 10MB</p>
                          <Button 
                            size="sm" 
                            color="primary" 
                            variant="flat"
                          >
                            Select Files
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;