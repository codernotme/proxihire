import React from "react";
import { Tabs, Tab, Card, CardBody, Badge, Button, Chip, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";

// Mock data for applications
const mockApplications = {
  active: [
    {
      id: "1",
      position: "Frontend Developer Intern",
      company: "TechStart",
      logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company1",
      status: "Interview",
      statusColor: "primary",
      appliedDate: "May 15, 2023",
      nextStep: "Technical Interview on May 20, 2023",
      progress: 60
    },
    {
      id: "2",
      position: "Marketing Assistant",
      company: "GrowthLabs",
      logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company2",
      status: "Application Review",
      statusColor: "warning",
      appliedDate: "May 12, 2023",
      nextStep: "Waiting for employer response",
      progress: 30
    },
    {
      id: "3",
      position: "Event Staff - Product Launch",
      company: "LaunchPad Events",
      logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company3",
      status: "Applied",
      statusColor: "default",
      appliedDate: "May 18, 2023",
      nextStep: "Waiting for application review",
      progress: 10
    }
  ],
  completed: [
    {
      id: "4",
      position: "UI/UX Design Intern",
      company: "DesignHub",
      logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company4",
      status: "Hired",
      statusColor: "success",
      appliedDate: "April 5, 2023",
      completedDate: "April 25, 2023",
      feedback: "Great portfolio and interview performance. Welcome to the team!"
    },
    {
      id: "5",
      position: "Content Creator",
      company: "MediaMakers",
      logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company6",
      status: "Rejected",
      statusColor: "danger",
      appliedDate: "April 10, 2023",
      completedDate: "April 30, 2023",
      feedback: "We appreciated your application but decided to go with a candidate with more industry experience."
    }
  ]
};

const ApplicationTracker: React.FC = () => {
  const [selected, setSelected] = React.useState("active");
  
  const renderApplicationCard = (application: any, isActive: boolean) => (
    <Card key={application.id} className="border border-divider mb-4">
      <CardBody className="p-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
            <img 
              src={application.logo} 
              alt={application.company} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{application.position}</h3>
                <p className="text-foreground/70">{application.company}</p>
              </div>
              <Chip 
                color={application.statusColor as any} 
                variant={application.status === "Hired" ? "solid" : "flat"}
              >
                {application.status}
              </Chip>
            </div>
            
            <div className="mt-3">
              <div className="flex items-center gap-1 text-sm text-foreground/70">
                <Icon icon="lucide:calendar" width={16} />
                <span>Applied on {application.appliedDate}</span>
              </div>
              
              {isActive ? (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Application Progress</span>
                    <span>{application.progress}%</span>
                  </div>
                  <Progress 
                    value={application.progress} 
                    color={application.statusColor as any}
                    className="h-2"
                  />
                  <p className="mt-2 text-sm text-foreground/70">
                    <Icon icon="lucide:info" className="inline mr-1" width={14} />
                    {application.nextStep}
                  </p>
                </div>
              ) : (
                <div className="mt-3">
                  <div className="flex items-center gap-1 text-sm text-foreground/70">
                    <Icon icon="lucide:check-circle" width={16} />
                    <span>Completed on {application.completedDate}</span>
                  </div>
                  
                  <div className="mt-2 p-3 bg-content2 rounded-md">
                    <p className="text-sm">
                      <span className="font-medium">Feedback: </span>
                      {application.feedback}
                    </p>
                  </div>
                </div>
              )}
              
              <div className="mt-4 flex justify-end gap-2">
                {isActive && (
                  <>
                    <Button size="sm" variant="flat">
                      <Icon icon="lucide:edit" width={16} className="mr-1" />
                      Update
                    </Button>
                    <Button size="sm" color="primary">
                      <Icon icon="lucide:message-square" width={16} className="mr-1" />
                      Contact
                    </Button>
                  </>
                )}
                {!isActive && application.status === "Hired" && (
                  <Button size="sm" color="success" variant="flat">
                    <Icon icon="lucide:star" width={16} className="mr-1" />
                    Leave Review
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Application Tracker</h1>
          <p className="text-foreground/70">Monitor the status of your job applications</p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Badge content={mockApplications.active.length} color="primary">
            <Button variant="flat" startContent={<Icon icon="lucide:bell" />}>
              Notifications
            </Button>
          </Badge>
          <Button color="primary" startContent={<Icon icon="lucide:plus" />}>
            New Application
          </Button>
        </div>
      </div>
      
      <Card className="border border-divider">
        <CardBody className="p-0">
          <Tabs 
            aria-label="Application tabs" 
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
              key="active" 
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:activity" width={18} />
                  <span>Active Applications ({mockApplications.active.length})</span>
                </div>
              }
            >
              <div className="p-4">
                {mockApplications.active.map(app => renderApplicationCard(app, true))}
              </div>
            </Tab>
            <Tab 
              key="completed" 
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check-circle" width={18} />
                  <span>Completed ({mockApplications.completed.length})</span>
                </div>
              }
            >
              <div className="p-4">
                {mockApplications.completed.map(app => renderApplicationCard(app, false))}
              </div>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
      
      <div className="mt-6">
        <Card className="border border-divider bg-content2">
          <CardBody className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon icon="lucide:lightbulb" className="text-primary" width={20} />
              </div>
              <div>
                <h3 className="font-medium">Application Tips</h3>
                <p className="text-sm text-foreground/70">
                  Follow up on applications that have been in review for more than 7 days to show continued interest.
                </p>
              </div>
              <Button size="sm" variant="light" className="ml-auto">
                More Tips
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationTracker;