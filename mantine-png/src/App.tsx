import React from "react";
import { Box, Divider, Flex, Group, Stack, Text } from "@mantine/core";
import {
  IconAdjustmentsHorizontal,
  IconChartHistogram,
  IconCloud,
  IconDatabase,
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconMaximize,
  IconMoon,
  IconSettings,
  IconUser,
  IconWorld,
} from "@tabler/icons-react";
import Logo from "./assets/rts-l.png";

const gold = "#c89b2b";
const sidebarBg = "#ffffff";
const sidebarText = "#000000";
const sidebarSubText = "#b6bcc5";
const lineColor = "#d0d4db";

type SidebarItemProps = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  dimmed?: boolean;
  isChild?: boolean;
  showConnectorTop?: boolean;
  showConnectorBottom?: boolean;
};

function SidebarItem({
  label,
  icon,
  active = false,
  dimmed = false,
  isChild = false,
  showConnectorTop = false,
  showConnectorBottom = false,
}: SidebarItemProps) {
  return (
    <Flex align="stretch">
      {/* Left connector / active bar / widget attachment */}
      <Box
        w={isChild ? 24 : 8}
        mr={isChild ? 4 : 10}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isChild ? (
          <Box
            style={{
              flex: 1,
              width: 16,
              position: "relative",
            }}
          >
            {/* vertical line */}
            <Box
              style={{
                position: "absolute",
                top: showConnectorTop ? 0 : "50%",
                bottom: showConnectorBottom ? 0 : "50%",
                left: 6,
                borderLeft: `1px solid ${lineColor}`,
              }}
            />
            {/* hook to item */}
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: 6,
                width: 10,
                height: 10,
                borderLeft: `1px solid ${lineColor}`,
                borderBottom: `1px solid ${lineColor}`,
                borderBottomLeftRadius: 8,
                transform: "translateY(-50%)",
              }}
            />
          </Box>
        ) : (
          <Box
            style={{
              width: 3,
              borderRadius: 999,
              backgroundColor: active ? gold : "transparent",
              marginTop: 8,
              marginBottom: 8,
            }}
          />
        )}
      </Box>

      {/* Item pill / active widget */}
      <Box
        style={
          !isChild && active
            ? {
                marginLeft: -16,
                paddingLeft: 16,
                backgroundColor: "#fff7e5",
                borderRadius: "0 999px 999px 0",
                flex: 1,
              }
            : { flex: 1 }
        }
      >
        <Group
          gap={10}
          py={6}
          px={isChild ? 8 : 10}
          style={{
            borderRadius: 999,
          }}
        >
          <Box
            w={18}
            h={18}
            display="flex"
            style={{
              alignItems: "center",
              justifyContent: "center",
              color: active ? gold : "#000000",
            }}
          >
            {icon}
          </Box>
          <Text
            size={isChild ? "xs" : "sm"}
            fw={active ? 600 : 500}
            c={dimmed ? sidebarSubText : sidebarText}
          >
            {label}
          </Text>
        </Group>
      </Box>
    </Flex>
  );
}

function SidebarSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text
      size="xs"
      fw={700}
      c={sidebarSubText}
      tt="uppercase"
      mb={6}
      style={{ letterSpacing: 0.4 }}
    >
      {children}
    </Text>
  );
}

export default function App() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        padding: "10px 14px",
      }}
    >
      <Flex direction="column" h="100%">
        {/* Header with logo and right icons */}
        <Group justify="space-between" align="center" mb={10}>
          <Box
            style={{
              height: 40,
            }}
          >
            <img
              src={Logo}
              alt="REMS Logo"
              style={{ height: "100%", width: "auto", display: "block" }}
            />
          </Box>

          <Group gap={18}>
            {/* Moon icon (no pill) */}
            <IconMoon size={18} color={gold} />

            {/* White circular icons */}
            <Box
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 0 1px #d4d4d8",
              }}
            >
              <IconWorld size={16} color="#000000" />
            </Box>
            <Box
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 0 1px #d4d4d8",
              }}
            >
              <IconMaximize size={16} color="#000000" />
            </Box>
            <Box
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 0 1px #d4d4d8",
              }}
            >
              <IconSettings size={16} color="#000000" />
            </Box>

            {/* User pill */}
            <Group gap={8}>
              <Box
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: gold,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <IconUser size={18} />
              </Box>
              <Text size="sm" fw={600} c="#000000">
                username
              </Text>
            </Group>
          </Group>
        </Group>

        {/* Content row */}
        <Flex gap={18} style={{ flex: 1, minHeight: 0, alignItems: "stretch" }}>
          {/* Sidebar */}
          <Box
            component="aside"
            w={{ base: 230, sm: 240 }}
            bg={sidebarBg}
            style={{
              borderRadius: 18,
              boxShadow: "0 4px 26px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
            p="md"
          >
            {/* Main navigation */}
            <Stack gap={8} mb="md">
              <SidebarItem
                label="Main Dashboard"
                icon={<IconGauge size={16} stroke={2} />}
                active
              />
              <SidebarItem
                label="Net Generation"
                icon={<IconDeviceDesktopAnalytics size={16} stroke={2} />}
              />
            </Stack>

            <Box mb="md">
              <SidebarSectionTitle>Pure Generation</SidebarSectionTitle>
              <Stack gap={4} mt={4}>
                <SidebarItem
                  label="Overview"
                  icon={<IconGauge size={14} stroke={2} />}
                  dimmed
                  isChild
                  showConnectorTop
                  showConnectorBottom
                />
                <SidebarItem
                  label="Inverters"
                  icon={<IconDatabase size={14} stroke={2} />}
                  dimmed
                  isChild
                  showConnectorTop
                  showConnectorBottom
                />
                <SidebarItem
                  label="Plants"
                  icon={<IconChartHistogram size={14} stroke={2} />}
                  dimmed
                  isChild
                  showConnectorTop
                  showConnectorBottom
                />
                <SidebarItem
                  label="EPC"
                  icon={<IconUser size={14} stroke={2} />}
                  dimmed
                  isChild
                  showConnectorTop
                  showConnectorBottom
                />
                <SidebarItem
                  label="Settings"
                  icon={<IconSettings size={14} stroke={2} />}
                  dimmed
                  isChild
                  showConnectorTop
                  showConnectorBottom
                />
                <SidebarItem
                  label="Data Collection"
                  icon={<IconCloud size={14} stroke={2} />}
                  dimmed
                  isChild
                  showConnectorTop
                  showConnectorBottom
                />
              </Stack>
            </Box>

            <Box mb="md">
              <Stack gap={10}>
                <SidebarItem
                  label="Gen Forecast"
                  icon={<IconChartHistogram size={16} stroke={2} />}
                  dimmed
                />
                <SidebarItem
                  label="Solar Control"
                  icon={<IconAdjustmentsHorizontal size={16} stroke={2} />}
                  dimmed
                />
              </Stack>
            </Box>

            <Divider my="sm" />

            {/* Bottom links */}
            <Box mt="auto">
              <Stack gap={10}>
                <SidebarItem
                  label="Plant Registration"
                  icon={<IconUser size={16} stroke={2} />}
                  dimmed
                />
                <SidebarItem
                  label="User Management"
                  icon={<IconUser size={16} stroke={2} />}
                  dimmed
                />
              </Stack>
            </Box>
          </Box>

          {/* Main gradient area (empty to match design) */}
          <Box
            style={{
              flex: 1,
            }}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
