import {
  Card,
  CardBody,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List paddingTop={3}>
      <ListItem>
        <Skeleton height="10px" />
        <SkeletonText />
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
