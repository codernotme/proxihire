import React from "react";
import { Card, CardBody, Tabs, Tab, Chip, Button, Progress, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

// Mock data for payments
const mockPayments = {
  pending: [
    {
      id: "1",
      company: "TechStart",
      logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company1",
      position: "Frontend Developer Intern",
      amount: 750.00,
      dueDate: "June 15, 2023",
      status: "Pending",
      hours: 30,
      rate: 25.00
    },
    {
      id: "2",
      company: "LaunchPad Events",
      logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company3",
      position: "Event Staff - Product Launch",
      amount: 200.00,
      dueDate: "June 10, 2023",
      status: "Processing",
      hours: null,
      rate: null
    }
  ],
  completed: [
    {
      id: "3",
      company: "GrowthLabs",
      logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company2",
      position: "Marketing Assistant",
      amount: 540.00,
      paidDate: "May 28, 2023",
      status: "Paid",
      hours: 30,
      rate: 18.00,
      feedback: {
        rating: 4.5,
        comment: "Great work on the social media campaign! Your creative ideas helped increase our engagement significantly.",
        skills: ["Social Media", "Content Creation", "Communication"]
      }
    },
    {
      id: "4",
      company: "DesignHub",
      logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company4",
      position: "UI/UX Design Intern",
      amount: 880.00,
      paidDate: "May 15, 2023",
      status: "Paid",
      hours: 40,
      rate: 22.00,
      feedback: {
        rating: 5.0,
        comment: "Exceptional work! Your designs were not only beautiful but also highly functional. The team was impressed with your attention to detail.",
        skills: ["UI Design", "Figma", "Prototyping"]
      }
    }
  ]
};

const PaymentFeedback: React.FC = () => {
  const [selected, setSelected] = React.useState("payments");
  
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Icon key={i} icon="lucide:star" className="text-warning" width={16} />
        ))}
        {hasHalfStar && (
          <Icon icon="lucide:star-half" className="text-warning" width={16} />
        )}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Icon key={i + fullStars + (hasHalfStar ? 1 : 0)} icon="lucide:star" className="text-foreground/30" width={16} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Payments & Feedback</h1>
          <p className="text-foreground/70">Track your earnings and performance reviews</p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="text-right">
            <p className="text-sm text-foreground/70">Total Earnings</p>
            <p className="font-semibold text-xl">$2,370.00</p>
          </div>
          <Button 
            color="primary"
            startContent={<Icon icon="lucide:download" />}
          >
            Export
          </Button>
        </div>
      </div>
      
      <Card className="border border-divider">
        <CardBody className="p-0">
          <Tabs 
            aria-label="Payment tabs" 
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
              key="payments" 
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:credit-card" width={18} />
                  <span>Payments</span>
                </div>
              }
            >
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-4">Pending Payments</h3>
                  {mockPayments.pending.length > 0 ? (
                    <div className="space-y-4">
                      {mockPayments.pending.map(payment => (
                        <Card key={payment.id} className="border border-divider">
                          <CardBody className="p-4">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                                <img 
                                  src={payment.logo} 
                                  alt={payment.company} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-semibold">{payment.position}</h3>
                                    <p className="text-foreground/70">{payment.company}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-semibold">${payment.amount.toFixed(2)}</p>
                                    <Chip 
                                      size="sm" 
                                      color={payment.status === "Processing" ? "warning" : "primary"} 
                                      variant="flat"
                                    >
                                      {payment.status}
                                    </Chip>
                                  </div>
                                </div>
                                
                                <div className="mt-3 flex flex-wrap gap-y-2">
                                  <div className="flex items-center gap-1 text-sm text-foreground/70 mr-4">
                                    <Icon icon="lucide:calendar" width={16} />
                                    <span>Due: {payment.dueDate}</span>
                                  </div>
                                  {payment.hours && (
                                    <div className="flex items-center gap-1 text-sm text-foreground/70 mr-4">
                                      <Icon icon="lucide:clock" width={16} />
                                      <span>{payment.hours} hours @ ${payment.rate}/hr</span>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="mt-4 flex justify-end">
                                  <Button size="sm" variant="flat">
                                    <Icon icon="lucide:info" width={16} className="mr-1" />
                                    Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="border border-divider">
                      <CardBody className="p-6 text-center">
                        <p className="text-foreground/70">No pending payments</p>
                      </CardBody>
                    </Card>
                  )}
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-4">Payment History</h3>
                  {mockPayments.completed.length > 0 ? (
                    <div className="space-y-4">
                      {mockPayments.completed.map(payment => (
                        <Card key={payment.id} className="border border-divider">
                          <CardBody className="p-4">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                                <img 
                                  src={payment.logo} 
                                  alt={payment.company} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-semibold">{payment.position}</h3>
                                    <p className="text-foreground/70">{payment.company}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-semibold">${payment.amount.toFixed(2)}</p>
                                    <Chip 
                                      size="sm" 
                                      color="success" 
                                      variant="flat"
                                    >
                                      {payment.status}
                                    </Chip>
                                  </div>
                                </div>
                                
                                <div className="mt-3 flex flex-wrap gap-y-2">
                                  <div className="flex items-center gap-1 text-sm text-foreground/70 mr-4">
                                    <Icon icon="lucide:calendar" width={16} />
                                    <span>Paid: {payment.paidDate}</span>
                                  </div>
                                  {payment.hours && (
                                    <div className="flex items-center gap-1 text-sm text-foreground/70 mr-4">
                                      <Icon icon="lucide:clock" width={16} />
                                      <span>{payment.hours} hours @ ${payment.rate}/hr</span>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="mt-4 flex justify-end">
                                  <Button size="sm" variant="flat">
                                    <Icon icon="lucide:download" width={16} className="mr-1" />
                                    Receipt
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="border border-divider">
                      <CardBody className="p-6 text-center">
                        <p className="text-foreground/70">No payment history</p>
                      </CardBody>
                    </Card>
                  )}
                </div>
              </div>
            </Tab>
            
            <Tab 
              key="feedback" 
              title={
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:message-square" width={18} />
                  <span>Feedback</span>
                </div>
              }
            >
              <div className="p-6">
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h3 className="font-semibold text-lg">Performance Overview</h3>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <span className="text-sm text-foreground/70">Overall Rating:</span>
                      <div className="flex items-center gap-1">
                        {renderStars(4.8)}
                        <span className="font-semibold ml-1">4.8</span>
                      </div>
                    </div>
                  </div>
                  
                  <Card className="border border-divider">
                    <CardBody className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="p-4 text-center">
                          <div className="text-3xl font-bold mb-1">100%</div>
                          <p className="text-sm text-foreground/70">On-time Completion</p>
                        </div>
                        <div className="p-4 text-center">
                          <div className="text-3xl font-bold mb-1">4</div>
                          <p className="text-sm text-foreground/70">Completed Gigs</p>
                        </div>
                        <div className="p-4 text-center">
                          <div className="text-3xl font-bold mb-1">2</div>
                          <p className="text-sm text-foreground/70">Repeat Clients</p>
                        </div>
                        <div className="p-4 text-center">
                          <div className="text-3xl font-bold mb-1">8</div>
                          <p className="text-sm text-foreground/70">Skills Endorsed</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-4">Client Feedback</h3>
                  {mockPayments.completed.filter(p => p.feedback).map(payment => (
                    <Card key={payment.id} className="border border-divider mb-4">
                      <CardBody className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={payment.logo} 
                              alt={payment.company} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold">{payment.company}</h3>
                                <p className="text-foreground/70">{payment.position}</p>
                              </div>
                              <div className="flex items-center">
                                {renderStars(payment.feedback!.rating)}
                                <span className="ml-2 font-medium">{payment.feedback!.rating}</span>
                              </div>
                            </div>
                            
                            <div className="mt-3">
                              <p className="text-sm">{payment.feedback!.comment}</p>
                            </div>
                            
                            <div className="mt-3">
                              <p className="text-xs text-foreground/70 mb-2">Skills Endorsed:</p>
                              <div className="flex flex-wrap gap-2">
                                {payment.feedback!.skills.map(skill => (
                                  <Chip key={skill} size="sm" variant="flat">
                                    {skill}
                                  </Chip>
                                ))}
                              </div>
                            </div>
                            
                            <div className="mt-4 text-right">
                              <p className="text-xs text-foreground/60">Received on {payment.paidDate}</p>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
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
                <Icon icon="lucide:info" className="text-primary" width={20} />
              </div>
              <div>
                <h3 className="font-medium">Payment Information</h3>
                <p className="text-sm text-foreground/70">
                  Payments are processed every Friday. Make sure your payment details are up to date in your profile settings.
                </p>
              </div>
              <Button size="sm" variant="light" className="ml-auto">
                Payment Settings
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PaymentFeedback;