"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  name: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
}

// Function to get initials from a name
const getInitials = (name: string): string => {
  if (!name) return "";

  // Split the name by spaces and get the first character of each part
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2); // Limit to 2 characters
};

// Generate a consistent background color based on the name
const getColorFromName = (name: string): string => {
  if (!name) return "#CBD5E1"; // Default gray color

  // Simple hash function to generate a color
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert hash to a color (limited to a nice palette of colors)
  const colors: string[] = [
    "#F87171", // red
    "#FB923C", // orange
    "#FBBF24", // amber
    "#A3E635", // lime
    "#34D399", // emerald
    "#22D3EE", // cyan
    "#38BDF8", // sky
    "#818CF8", // indigo
    "#A78BFA", // violet
    "#F472B6", // pink
  ];

  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  imageUrl,
  size = "md",
}) => {
  const initials = getInitials(name);
  const backgroundColor = getColorFromName(name);

  return (
    <Avatar>
      <AvatarImage src={imageUrl} alt={name} />
      <AvatarFallback
        style={{
          backgroundColor,
          color: "white",
          fontWeight: "bold",
        }}
      >
        {initials}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
